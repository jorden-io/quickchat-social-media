#include <stdio.h>
#include <stdlib.h>
#include <memory.h>
#include <stdbool.h>
#include "imp.h"

int dos(int var)
{
    switch (var)
    {
    case 10:
        for (int i = 0; i < var; i++)
        {
            printf("%i\n", var);
        }
        return 0;
    default:
        return var;
    }
}
int main()
{
    printf("%i", dos(10));
    if (doTask() == true)
    {
        printf("%s", "yes\n");
    }
    else
    {
        printf("%s", "no\n");
    }
    int i = 10;
    printf("%i\n", i);
    int *p = &i;
    *p = 100;
    printf("%i", i);
    // printf("%p\n",toTen(&p));
    //  long *p = malloc(29304333);
    //  *p = 1485424449985338349;
    //  printf("the value is %lu\n", *p);
    //  free(p);
    return 0;
}