"""Added initial table

Revision ID: bd303c9b8ed3
Revises: 6c3e2a4ec338
Create Date: 2024-05-26 15:47:28.713275

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bd303c9b8ed3'
down_revision = '6c3e2a4ec338'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('method', sa.Column('max', sa.String(), nullable=True))
    op.add_column('method', sa.Column('min', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('method', 'min')
    op.drop_column('method', 'max')
    # ### end Alembic commands ###