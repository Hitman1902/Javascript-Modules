// Task 2
import java.util.HashMap;
class Task{
    public static void main(String[] args) {
        String input="aaarrajan";
        HashMap <Character,Integer> count=new HashMap<>();
        for(char c:input.toCharArray()){
            count.put(c,count.getOrDefault(c, 0)+1);
        }
        count.forEach((key,value)-> System.out.println(key+"-"+value));
    }
}

// Task 3 ß
// class LongestString{
//     public static void main(String[] args) {
//         String s="I can code";
//         String [] words=s.split(" ");
//         String longest="";
//         for (String word:words)
//         {
//             if (word.length()>longest.length())
//             {
//                 longest=word;
//             }
//         }
//         System.out.println(longest);
//     }
// }

// Task 4
class Pattern{
    public static void main(String[] args) {
        int n=5;
        // Upper loop
        for (int i=1;i<=n;i++)
        {
            for (int j=1;j<=i;j++)
            {
                System.out.print(i);
            }
            System.out.println();
        }
        // Lower Loop
        for (int i=n-1;i>=1;i--)
        {
            for (int j=1;j<=i;j++)
            {
                System.out.print(i);
            }
            System.out.println();
        }
    }
}