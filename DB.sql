CREATE database YGYJ;

use YGYJ;

CREATE TABLE personal(
    userid VARCHAR(15) NOT NULL PRIMARY KEY,
    userpw VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    nickname VARCHAR(20) NOT NULL PRIMARY KEY,
    gender VARCHAR(2) NOT NULL,
    adress VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL PRIMARY KEY,
    tel VARCHAR(11) NOT NULL,
    birth VARCHAR(6) NOT NULL
) DEFAULT CHARSET=utf8mb4;



use YGYJ;

CREATE TABLE board(
    idx INT auto_increment PRIMARY KEY,
    subject VARCHAR(50) NOT NULL,
    nickname VARCHAR(20) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    story TEXT NOT NULL
);

-- INSERT INTO board (subject,nickname,story) VALUES('승쥬','ㅎㅇㅎㅇ','스토리1');
