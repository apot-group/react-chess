from databases.models.user_info import UserInfo

from databases.transaction import db_psycopg2

def get_by_user_id_join(id: int) -> UserInfo:
    postgreSQL_select_Query = """
        select u.id, u.phone, u.email, u.first_name, u.last_name, ui.birth_date, ui.address, ui.avatar_url, ui.country
        from reactchess.user as u
        left join reactchess.user_info as ui on (ui.user_id = u.id)
        where u.id = {} limit 1;
    """.format(id)
    data = db_psycopg2.execute(postgreSQL_select_Query)
    return data
