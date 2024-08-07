import logging
from typing import List, Optional

import sqlalchemy as sa
import strawberry  # noqa
from api.gql.types import PageInfo
from api.gql.auth import auth_from_info
from api.deps import Info
from api.gql.permissions import IsAuthenticated
from api.gql.client.types import (
    ClientContactType,
    ClientCursorPage,
    ClientEdge,
    ClientType,
)
from apps.client import models

from utils import has_value_or_is_truthy


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.type
class ClientQuery:
    @strawberry.field
    async def client_all(
        self,
        info: Info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> ClientCursorPage:
        ss, dd = await auth_from_info(info)

        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = [
                "name__ilike",
                "email__ilike",
                "email_cc__ilike",
                "province___name__ilike",
                "district___name__ilike",
                "phone_mobile__ilike",
                "phone_business__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.Client.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[ClientEdge[ClientType]] = page.edges
        items: List[ClientType] = page.items
        page_info: PageInfo = page.page_info

        return ClientCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_by_uid(self, info, uid: str) -> ClientType:
        return await models.Client.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_by_code(self, info, cliente_id: str) -> ClientType:
        return await models.Client.get(cliente_id=cliente_id)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def clients_by_name(self, info, name: str) -> List[ClientType]:
        clients = await models.Client.get_all(name__contains=name)
        # clients = await models.Client.get_all(name__like=f"%{name}%")
        return clients

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_search(self, info, query_string: str) -> List[ClientType]:
        filters = ["name__ilike"]
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = await models.Client.get_all(**arg)
            for item in query:
                combined.add(item)
        return list(combined)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_contact_all(self, info) -> List[ClientContactType]:
        return await models.ClientContact.all()

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_contact_uid(self, info, uid: str) -> ClientContactType:
        return await models.ClientContact.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def client_contact_by_client_uid(
        self, info, client_uid: str
    ) -> List[ClientContactType]:
        return await models.ClientContact.get_all(client_uid=client_uid, is_active=True)
