-- 코드를 입력하세요
--  나이 정보가 없는 회원이 몇 명인지 출력하는 SQL문을 작성
SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE AGE IS NULL