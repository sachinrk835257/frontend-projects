import mysql.connector as sql
d_base=input("firstly enter your database :> ")
sqlcon=sql.connect(host="localhost",user="sachinrk",password="Rk@835257",database=d_base)
cursor=sqlcon.cursor()

def describ(tabl_name):
    query2="desc "+ tabl_name + ";"
    # after "desc " there is space added which is necessary for correct syntax
    cursor.execute(query2)
    info=cursor.fetchall()
    row=cursor.rowcount
    for data in info: 
        print(data)
    print("no. of rows:> ",row)

tabl_name=input("enter table name:> ")
print("if you want to see attributes and data types then type \"desc\" or \"describe\"")
attribute=input()
if attribute.lower()=="desc" or describe:
    describ(tabl_name)

sqlcon.close()