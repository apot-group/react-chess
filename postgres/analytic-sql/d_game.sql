-- Table: analytic.d_game

DROP TABLE IF EXISTS analytic.d_game;

CREATE TABLE IF NOT EXISTS analytic.d_game
(
    game_id bigint NOT NULL,
    game_name character varying COLLATE pg_catalog."default" NOT NULL,
    create_date time without time zone,
    is_active boolean NOT NULL DEFAULT true,
    design_by character varying COLLATE pg_catalog."default",
    CONSTRAINT d_game_pkey PRIMARY KEY (game_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS analytic.d_game
    OWNER to admin;