from sqlalchemy.orm import Session

from databases.models.user_info import UserInfo
from settings import config
import psycopg2
from psycopg2.extras import RealDictCursor


def get_by_user_id_join(id: int) -> UserInfo:
    connection = psycopg2.connect(user=config.DATABASE['user'],
                                  password=config.DATABASE['pass'],
                                  host=config.DATABASE['host'],
                                  port=config.DATABASE['port'],
                                  database=config.DATABASE['database'])
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    postgreSQL_select_Query = """
        select u.id, u.phone, u.email, u.first_name, u.last_name, ui.birth_date, ui.address, ui.avatar_url, ui.country
        from reactchess.user as u
        left join reactchess.user_info as ui on (ui.user_id = u.id)
        where u.id = {} limit 1;
    """.format(id)
    cursor.execute(postgreSQL_select_Query)
    records = cursor.fetchone()
    if connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
    return records
