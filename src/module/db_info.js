module.exports = (function() {
    return {
        real: { // localhost
            host: 'umcdb.cts8qkyq1j2m.ap-northeast-2.rds.amazonaws.com',  //엔드포인트입력
            port: '3306',  //myql포트입력
            user: 'root',    //마스터유저입력
            password: 'root1234',  //마스터유저비밀번호입력
            database: 'umcdb' //데이터베이스 인스턴스입력
        }
    }
})();