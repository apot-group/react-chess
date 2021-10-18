-- Table: analytic.d_user

DROP TABLE IF EXISTS analytic.d_user;

CREATE TABLE IF NOT EXISTS analytic.d_user
(
    user_dim_id bigint NOT NULL,
    user_name character varying COLLATE pg_catalog."default" NOT NULL,
    birth_date date,
    create_date date,
    country character varying COLLATE pg_catalog."default",
    CONSTRAINT d_user_pkey PRIMARY KEY (user_dim_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS analytic.d_user
    OWNER to admin;
