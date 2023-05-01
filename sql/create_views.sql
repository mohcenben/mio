CREATE OR REPLACE VIEW PicturesWithUsers AS
    SELECT P.*, U.username, U.photoProfile
    FROM Pictures P NATURAL JOIN Users U;

