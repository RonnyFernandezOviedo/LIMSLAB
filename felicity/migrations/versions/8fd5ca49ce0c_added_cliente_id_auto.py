"""Added cliente_ID auto

Revision ID: 8fd5ca49ce0c
Revises: 15fd0081f214
Create Date: 2024-03-29 10:42:36.159354

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8fd5ca49ce0c'
down_revision = '15fd0081f214'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client', sa.Column('cliente_id', sa.String(), nullable=True))
    op.create_index(op.f('ix_client_cliente_id'), 'client', ['cliente_id'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_client_cliente_id'), table_name='client')
    op.drop_column('client', 'cliente_id')
    # ### end Alembic commands ###
