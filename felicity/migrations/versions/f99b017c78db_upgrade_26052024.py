"""Upgrade 26052024

Revision ID: f99b017c78db
Revises: 8fd5ca49ce0c
Create Date: 2024-05-26 14:10:01.934631

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f99b017c78db'
down_revision = '8fd5ca49ce0c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_client_code', table_name='client')
    op.drop_column('client', 'code')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client', sa.Column('code', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.create_index('ix_client_code', 'client', ['code'], unique=False)
    # ### end Alembic commands ###