//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Woof! Great job!"
compliments[1]="Pawsome!"
compliments[2]="Pawfection!"
compliments[3]="You are Golden!"
compliments[4]="You are pawsitively amazing!"
compliments[5]="Raise the ruff!"
compliments[6]="You know Goldendoodles fur real!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What are some common Goldendoodle coat colors?"
choice1[1]="Black"
choice1[2]="Cream"
choice1[3]="Copper"
choice1[4]="All of the above"

question[2]="Which two breeds are mixed to create a Goldendoodle?"
choice2[1]="Labrador Retriever and Golden Retriever"
choice2[2]="Poodle and Golden Retriever"
choice2[3]="Poodle and Labrador Retriever"
choice2[4]="Golden Retriever and Maltese"

question[3]="When were Goldendoodles first intentionally bred?"
choice3[1]="1890s"
choice3[2]="1990s"
choice3[3]="2000s"
choice3[4]="2010s"

question[4]="How many sizes do Goldendoodles come in?"
choice4[1]="1"
choice4[2]="2"
choice4[3]="3"
choice4[4]="4"

question[5]="Which country calls these dogs Groodles?"
choice5[1]="Ireland"
choice5[2]="England"
choice5[3]="Australia"
choice5[4]="Scotland"

question[6]="What do Goldendoodles love?"
choice6[1]="Exercise"
choice6[2]="Playing"
choice6[3]="Toys"
choice6[4]="All of the above"

question[7]="What should you never feed your Goldendoodle?"
choice7[1]="Avocado"
choice7[2]="Chocolate"
choice7[3]="Garlic"
choice7[4]="All of the above"

question[8]="What characteristics make a Goldendoodle's temperament?"
choice8[1]="Intelligent"
choice8[2]="High Energy"
choice8[3]="Friendly"
choice8[4]="All of the above"

question[9]="In which US states are Goldendoodles the most popular?"
choice9[1]="Utah and Idaho"
choice9[2]="Florida and Georgia"
choice9[3]="New York and Pennsylvania"
choice9[4]="California and Oregon"

question[10]="What hair types can a Goldendoodle have?"
choice10[1]="Straight"
choice10[2]="Wavy"
choice10[3]="Curled"
choice10[4]="All of the above"

solution[1]="d"
solution[2]="b"
solution[3]="b"
solution[4]="c"
solution[5]="c"
solution[6]="d"
solution[7]="d"
solution[8]="d"
solution[9]="a"
solution[10]="d"
