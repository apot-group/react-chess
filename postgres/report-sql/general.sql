
select 
	count(distinct(tmp.user_name)) as total_user, 
	count(distinct(tmp.user_country)) as total_country,
	count(distinct(tmp.game_design_by)) as total_design,
	count(distinct(tmp.game_name)) as total_game


from 
(select 
	du.user_name, du.country as user_country, du.birth_date as user_birth_date, du.create_date as user_create_date, 
	dg.game_name, dg.design_by as game_design_by, 
	dd.date_actual, dd.weekend_indr as date_is_weekend,
	fgu.total_pay_in_game_usd, fgu.total_time_in_game_second, fgu.total_time_watching_ads_second 
from analytic.f_game_user as fgu
left join analytic.d_date as dd on (fgu.date_key = dd.date_dim_id)
left join analytic.d_game as dg on (fgu.game_key = dg.game_dim_id)
left join analytic.d_user as du on (fgu.user_key = du.user_dim_id)) as tmp



	