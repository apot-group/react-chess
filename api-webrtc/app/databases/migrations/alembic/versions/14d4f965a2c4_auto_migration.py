"""Auto migration

Revision ID: 14d4f965a2c4
Revises: 
Create Date: 2021-10-14 12:07:36.466814

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14d4f965a2c4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=True),
    sa.Column('last_name', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=500), nullable=False),
    sa.Column('phone', sa.String(length=255), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('create_date', sa.DateTime(), nullable=False),
    sa.Column('update_date', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    schema='reactchess'
    )
    op.create_index(op.f('ix_reactchess_user_id'), 'user', ['id'], unique=False, schema='reactchess')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_reactchess_user_id'), table_name='user', schema='reactchess')
    op.drop_table('user', schema='reactchess')
    # ### end Alembic commands ###