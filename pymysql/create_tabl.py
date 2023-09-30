import mysql.connector as sql

#functions
def describ():
    tabl_name=input("enter table name:> ")
    query2="desc "+ tabl_name + ";"
    cursor.execute(query2)
    info=cursor.fetchall()
    row=cursor.rowcount
    for data in info:
        print(data)
    print("no. of rows:> ",row)
sqlcon=sql.connect(host="localhost",user="sachinrk",password="Rk@835257",database="drinks")
cursor=sqlcon.cursor()
if sqlcon.is_connected():
    print("...suuccesfully enters in mysql world \n welcome of you.....")
    # thrugh an error if table name is already exist so checks first tables in that databases
    query1=input("mysql query for create table:> ")
    cursor.execute(query1)
    print("table create succesfully")
    
    print("if you want to see columns and other related information then type \"desc\"")
    show_col=input()
    if show_col=="desc" or "DESC":
        describ()
else:
    print("\nERROR CONNECTION\n")
sqlcon.close()
