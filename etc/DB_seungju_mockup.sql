CREATE database YGYJ;

use YGYJ;

CREATE TABLE board(
    idx INT auto_increment PRIMARY KEY,
    subject VARCHAR(50) NOT NULL,
    nickname VARCHAR(20) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    story TEXT NOT NULL
);

-- INSERT INTO board (subject,nickname,story) VALUES('승쥬','ㅎㅇㅎㅇ','스토리1');
