from typing import List, Optional

import sqlalchemy as sa
import strawberry  # noqa
from api.gql.types import PageInfo
from api.gql.inventory import types
from api.gql.permissions import IsAuthenticated
from apps.inventory import models

from utils import has_value_or_is_truthy


@strawberry.type
class InventoryQuery:
    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_item_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockItemCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockItem.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockItemEdge[types.StockItemType]] = page.edges
        items: List[types.StockItemType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockItemCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_item_by_uid(self, info, uid: str) -> Optional[types.StockItemType]:
        return await models.StockItem.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_category_all(self, info) -> List[types.StockCategoryType]:
        return await models.StockCategory.all()

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_category_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockCategoryType]:
        return await models.StockCategory.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def hazard_all(self, info) -> List[types.HazardType]:
        return await models.Hazard.all()

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def hazard_by_uid(self, info, uid: str) -> Optional[types.HazardType]:
        return await models.Hazard.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_unit_all(self, info) -> List[types.StockUnitType]:
        return await models.StockUnit.all()

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_unit_by_uid(self, info, uid: str) -> Optional[types.StockUnitType]:
        return await models.StockUnit.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_packaging_all(self, info) -> List[types.StockPackagingType]:
        return await models.StockPackaging.all()

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_packaging_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockPackagingType]:
        return await models.StockPackaging.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_product_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockProductCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockProduct.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockProductEdge[types.StockProductType]] = page.edges
        items: List[types.StockProductType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockProductCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_product_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockProductType]:
        return await models.StockProduct.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_order_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        status: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockOrderCursorPage:
        filters = []

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["order_number__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters.append({sa.or_: _or_})

        if status:
            filters.append({"status__exact": status})

        page = await models.StockOrder.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockOrderEdge[types.StockOrderType]] = page.edges
        items: List[types.StockOrderType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockOrderCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_order_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockOrderType]:
        return await models.StockOrder.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_order_product_all(
        self, info, stock_order_uid: str
    ) -> List[types.StockOrderProductType]:
        return await models.StockOrderProduct.get_all(order_uid=stock_order_uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_order_product_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockOrderProductType]:
        return await models.StockOrderProduct.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_transaction_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockTransactionCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike", "product___name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockTransaction.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockTransactionEdge[types.StockTransactionType]] = page.edges
        items: List[types.StockTransactionType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockTransactionCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_transaction_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockTransactionType]:
        return await models.StockTransaction.get(uid=uid)

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_adjustment_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockAdjustmentCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = [
                "name__ilike",
                "adjustment_type__ilike",
                "remarks__ilike",
                "product___name__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockAdjustment.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockAdjustmentEdge[types.StockAdjustmentType]] = page.edges
        items: List[types.StockAdjustmentType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockAdjustmentCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def stock_adjustment_by_uid(
        self, info, uid: str
    ) -> Optional[types.StockAdjustmentType]:
        return await models.StockAdjustment.get(uid=uid)
