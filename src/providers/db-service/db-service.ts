import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DbService {

    db:SQLiteObject

    constructor(private sqlite: SQLite) {

    }

    createTable() {
        this.sqlite.create({
            name: 'school.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            this.db = db;
            db.executeSql(`
                CREATE TABLE IF NOT EXISTS group_info (id BIGINT primary key, eid varchar(50), name varchar(50), image varchar(100));
                CREATE TABLE IF NOT EXISTS user_info (id BIGINT primary key, eid varchar(50), name varchar(20), image varchar(100));
            `, {}).then(() => {
                console.log('=====create table=====');
            }).catch(e => console.error('create table failure====>' + e, e));;
        }).catch(e => {
            console.log('create db failure===>' + e, e);
        });
    }

    /**
     * 更新数据库
     * @param sql 
     * @param params 
     */
    executeUpdate(sql: string, params: any) {
        if(this.db) {
            this.db.executeSql(sql, params).then();
        }
    }

    /**
     * 批量更新数据
     * @param sql 
     * @param params 
     */
    executeBatch(sql: string, params: Array<any>) {
        if(this.db) {
            let batchParams = [];
            params.forEach(value => {
                batchParams.push([sql, value]);
            });
            this.db.sqlBatch(batchParams);
        }
    }

    /**
     * 查询数据
     * @param sql 
     * @param params 
     */
    executeQuery(sql: string, params: any): Promise<any> {
        return new Promise<any> ((resolver) => {
            if(this.db) {
                this.db.executeSql(sql, params).then((rs: any) => {
                    if(rs.rows.length == 1) {
                        resolver(rs.rows.item(0));
                    } else if(rs.rows.length) {
                        let data = [];
                        for(let i = 0; i < rs.rows.length; i++) {
                            data.push(rs.rows.item(i));
                        }
                        resolver(data);
                    } 
                });
            }
        });
    }

    /**
     * 根据环信编号获取用户信息
     * @param eid 
     */
    getUserByEid(eid: string): Promise<any> {
        return this.executeQuery('select * from user_info where eid = ?', [eid]);
    }

    /**
     * 根据环信编号获取群组信息
     * @param eid 
     */
    getGroupByEid(eid: string): Promise<any> {
        return this.executeQuery('select * from group_info where eid = ?', [eid]);
    }

}
