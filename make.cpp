#include <iostream>
#include "hed.h"
#include <cstdint>
#include <string>
#include <cstdlib>
#include <array>
#define log(n) std::cout << n << std::endl
std::atomic_uint_fast64_t *np{nullptr};
void displayC()
{
    // char dhjas[3] = "hh";
    log(sizeof(char[784923]));
}
std::int32_t made()
{
    return 98;
}
template <typename T, typename Y>
T cmade(T x, Y y)
{
    return (x + y);
}
using intPointer = const int *;
intPointer PBA(intPointer p)
{
    log(*p);
    return p;
};
using refP = const std::int64_t &;
int &RBR(int &i)
{
    i *= 10;
    return i;
}
refP PBR(refP r)
{
    log(r);
    return r;
};
void change(double &d)
{
    d = static_cast<int>(d);
};
int main()
{
    displayC();
    int const size = 10;
    std::array<int, size> ar;

    for (int i = 0; i < size; ++i)
    {
        ar[i] = i;
    }
    ar[0] = 18932;
    ar[9] = 134;
    log(ar.back());
    log("----array-data----");
    int refy = 10;
    log(refy);
    RBR(refy);
    log(refy);
    log("----------");
    using std::string;
    string *ss = new string;
    *ss = "hey";
    log(*ss);
    delete (ss);
    std::int64_t *Calloc = (std::int64_t *)calloc(5, sizeof(int));
    for (int i = 0; i < 5; ++i)
    {
        assert(Calloc);
        if (Calloc != nullptr)
        {
            Calloc[i] = i;
            std::cout << Calloc[i] << "\n"
                      << std::endl;
        }
        else
        {
            std::exit(1);
        };
    };
    free(Calloc);
    std::int64_t *zalloc = static_cast<std::int64_t *>(malloc(sizeof(int)));
    log(sizeof(zalloc[0]));
    log("-------------");
    // zalloc[0] = 182;
    // for (int i = 0; i < 10; ++i)
    // {
    //     zalloc[i] = i;
    //     log(zalloc[i]);
    // }
    // log("------------");
    // for (int i = 0; i < 100; ++i)
    // {
    //     log(zalloc[i]);
    //     //*zalloc = 103892;
    // }
    log("---zalloc----");
    log(&zalloc[11]);
    log("---zalloc----");
    free(zalloc);
    int *hi = new int;
    *hi = 7843;
    log(*hi);
    double duh{5.5};
    log(duh);
    change(duh);
    log(duh);
    int intyP{999};
    PBA(&intyP);
    log("-------");
    int pass = 47832;
    PBR(pass);
    // int thi = 10;
    // int *cptr = &thi;
    // *cptr = 109;
    // log(cptr);
    int bl;
    std::cin >> bl;
    std::int_fast16_t arr[2];
    arr[0] = 10479;
    arr[1] = 479;
    log(arr[0]);
    log(arr[1]);
    std::cout << cmade(10, 10) << std::endl;
    std::cout << cmade(10.1, 10.1) << std::endl;
    int *m = (int *)malloc(sizeof(int));
    // int **n = &m;
    // n = 0;
    log(*m);
    free(m);
    // std::string s = "hey";
    //  int *l;
    //  int *p = l;
    //  *p = 10;
    log("-----------");
    double d = 19.9;
    int ne = static_cast<int>(d);
    log(ne);
    int *ptr = (int *)malloc(5 * sizeof(int));
    if (!ptr)
    {
        std::cout << "allocation failed";
        std::exit(1 && "bad");
    }
    for (int i = 0; i < 5; i++)
    {
        ptr[i] = i * 2 + 1;
        log(ptr[i]);
    }
    using std::cout;
    cout << ptr[4] << std::endl;
    log("ptr");
    std::cout << sizeof(std::string) << std::endl;
    log("-----------");
    int hey = (int)10;
    log(hey);
    // l = *(&p);
    // log(&l);
    // log('l');
    static const std::uint_fast64_t *i = {0};
    std::cout << *(&i) << "\n"
              << std::endl;
    unsigned long long int val = 2803382423423;
    log(val);
    deep::hell::printn(64);
    return 0;

    // std::string b = "bianca";
    // &b;
}
