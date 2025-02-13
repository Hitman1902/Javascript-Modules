# Task 1
# n=int(input('enter the number for Factorial '))
# def factorial(n):
#     if n==0 or n==1:
#         return 1
#     return n * factorial(n-1)
# print(factorial(n))

# Task11
# a=[1,2,5]
# b=[3,4,6]
# c=a+b
# print(sorted(c))

# string=['apple','banana','cat','bga','a']
# print(sorted(string))

# a=[1,2,3,4,5,6]
# print(a.sort(reverse=False))

# date="Jun-16-2025"
# month,day=date.split("-")
# print(month,day)

# arr=[1,2,3,4,5,6]
# for i in range(0,len(arr)):
#     for j in range((i+1),len(arr)):
#         if arr[j]>arr[i]:
#             arr[i],arr[j]=arr[j],arr[i]
# print(arr)

# merge sort
# arr1=[1,2,5]
# arr2=[3,4,6]
# c=arr1+arr2
# for i in range(0,len(c)):
#     for j in range((i+1),len(c)):
#         if c[j]>c[i]:
#             c[i],c[j]=c[j],c[i]
# print(c)
# input = [
#   { id: 1, "name": "john", "city": "New York" },
#   { id: 2, "name": "Jane", "city": "London" },
#   { id: 3, "name": "Mike", "city": "New York" },
#   { id: 4, "name": "Value", "city": "Ahmedabad" },
# ]
# dic=[]
# for i in input:
#     if !dic[i["city"]]:

users = {
  'Alice': ["Bob", "Charlie"],
  'Bob': ["Alice", "David"],
  'Charlie': ["Alice", "Eve"],
  'David': ["Bob"],
  'Eve': ["Charlie"]
}
key='Alice'
output=[]
for i in users:
    if key in users[i]:
        continue
    if key==i:
        continue
    output.append(i)
print(output)