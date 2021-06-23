n=int(input("Enter the student marks"))
if n>=80 and n<100:
    grade='A'
else:
    if n>=70 and n<80:
       grade='B'
    else:
        if n>=60 and n<70:
            grade='C'
        else:
              if n>=50 and n<60:
                grade='D'
              else:
                  if n>=0 and n<50:
                      grade="F"
                  else:
                      grade="Y"
                      print("mark=",n,"grade",grade)
        