"""Added cliente adresse

Revision ID: d866501641d0
Revises: b524471b130d
Create Date: 2024-03-27 21:35:06.440740

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd866501641d0'
down_revision = 'b524471b130d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client', sa.Column('cliente_direccion', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('client', 'cliente_direccion')
    # ### end Alembic commands ###