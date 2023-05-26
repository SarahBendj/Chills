-- Deploy cuisto:4.setting_dates to pg

BEGIN;



ALTER TABLE "app_user"
 
 ADD COLUMN createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW();

COMMIT;
