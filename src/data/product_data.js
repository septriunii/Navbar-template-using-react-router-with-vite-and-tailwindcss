const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      photo:
        "https://www.exoticgardening.com/wp-content/uploads/2016-09-21-22.43.15-2550x3400.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      photo: "https://dsm01pap007files.storage.live.com/y4mD7QB1DPYAT_YwRX5A8INsnTFJ2HjiHynRbW1KQHz38uC6IME_05D2GZgYTmexn3tlZBgYTNJOCjqRrwtM1hAbM9y58f9K6Z0XHc8qIjXPTdzXilCxnjiK24lCcxgRghyYwrwcI74g3KAOmuqTOcWUf1lBW4e7qvD4i1su-X_7rnu38jDl9_Fp3yLPvv4sZ3c?width=810&height=978&cropmode=none",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      photo: "https://dsm01pap007files.storage.live.com/y4mnmbXpMyt_bctoyuZC2r21rKU8ZcEHqk1yxvtoAn4kP1dF9zfrb8cwDvxns-2XcS3hvV3DDyEpXRmbQzvD8PPL4V0QdA-0xos6_tBDZP1CuquWuh1kO9Kd0YSy4qf27_jTdHXRrIiTSDF6ESFumlQbNeJ0iddLC2QZnOYGApwPdTNzNW8d6vIzZ5g7uX9Sdix?width=970&height=1170&cropmode=none",
    },
    {
        id: 4,
        name: "Product 4",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4mr2516uYXUWADGBUSa7vfLBxDDfSlxaxTl7WZtNzyUzj0HZstF-eHD75rz3mK-4L_ManP71rbriHNvPkpV0E94-mzlXUgE0-_98o-CuuRHtFntzs0-QqhXiqb2vvqkXpNl0o_OUMQVSTKRIfHUV4I06YIReHLdNDivg0BzivuVItitc4aHTpPV_GrqO5XB9Cw?width=1600&height=1259&cropmode=none",
      },{
        id: 5,
        name: "Product 5",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4mPH2DWNTNr1hVUPBflnk_b6ZCdkxjbk5wCiy9aTztqhDdA9FuzUKC891XN_X257z2Mml3eFZjvoaY7A8MbEJi4reKKtlotJK8eUU-09wZKRHydsIB30xDXUAhdd9cMKZoyg8AbcmFyvY5lS0Ui-Y8lYJbRRVwFUFpvwB6v-9KEd7FhBph9WFfnGBrydoJrQHE?width=1600&height=1295&cropmode=none",
      },{
        id: 6,
        name: "Product 6",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4m6eX4AAcYsCe6DN4Q52bM_u124zl5r3FhuJYBH14i4km1Km1Y6Ck451PSkz_NIVDmnv-GJNEGvOTCSbQi4UHAAteXRB3T0YQN11y2Ti44qrXQwlC5lfInyc64PP08hlDfJJcXAmzWWM5cWX-jbAS17asDzbVq-oQGr7DCkH6-BjquawXyVg982BR6aibHJgxC?width=1600&height=1200&cropmode=none",
      },{
        id: 7,
        name: "Product 7",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4m8t2DTQEe4DGsiD0CQoHYSU4a4qwZS2_YNpzYCzKiVLLY8gcUSkr-giaPet7auf0vclNcW8OdLQoCLrw_JK311c-MyClAgFWDyz6v5G2n8sG6A9gx-2FM98-8L2ZA1YkLmO4luxgiynMV1QW7uG4ovxWqL-L0kEXQarrhE8b8FCrWbovjjtI_S86q-UEObNMn?width=2592&height=1944&cropmode=none",
      },{
        id: 8,
        name: "Product 8",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4m5PO-p9zgkOUPQcatlXPbj3hFAsxpI2IHI1FQSN-HVWwdA_wswrn0CaeJocbVAQeMpUQP6GEKtExFbUTryyQ3Ehu2QO4LHstAbaFx5bHBy5E2OlUjxRaxz5eoJKy8Dr6HhLv23JRLdJoLO3eqLWgep1Frf0THErkSulTkgryRP5sf-QQUORo_vd-wGONWYDo_?width=3456&height=2304&cropmode=none",
      },{
        id: 9,
        name: "Product 9",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4mHgPDyvrmYMhfAyMM4E6DoFs6nUkr-epS-QWqeWF6EkYt8td25Zw_utf-uDnHGBIWEWJg6I5wkDg-aXmFgdnsByg4eAYqheOch3kcO92cWnQag85fpro6m0HSBGHgIjRUWCqpT5VuCPzHqGRX3Ixdhdq6xspQwR4FYKzctVV5ABzlA4A-hnnHu2wOgtQ7iQ7i?width=474&height=498&cropmode=none",
      },{
        id: 10,
        name: "Product 10",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4m52onFP3fL8Lv-tKLAeXPCjkJVjog6sA-NaylkQiXcSIE0yB2lSu8GcKzJwHpyHRPY2j00Q9ab2sxIEHNWKIDhwyB6a-tOaseKv30QNfLvbb0RBHwVxIfk_FjdC3nt6Yd-7xwQzIj2Zx2Ty1zWArEsmT72mRCMq0OXazeDA6OLHKiVM7zNX78aNNCgj8LSt4_?width=1278&height=1600&cropmode=none",
      },
      {
        id: 11,
        name: "Product 11",
        price: 10,
        photo:
          "https://www.exoticgardening.com/wp-content/uploads/2016-09-21-22.43.15-2550x3400.jpg",
      },
      {
        id: 12,
        name: "Product 12",
        price: 20,
        photo: "https://dsm01pap007files.storage.live.com/y4mD7QB1DPYAT_YwRX5A8INsnTFJ2HjiHynRbW1KQHz38uC6IME_05D2GZgYTmexn3tlZBgYTNJOCjqRrwtM1hAbM9y58f9K6Z0XHc8qIjXPTdzXilCxnjiK24lCcxgRghyYwrwcI74g3KAOmuqTOcWUf1lBW4e7qvD4i1su-X_7rnu38jDl9_Fp3yLPvv4sZ3c?width=810&height=978&cropmode=none",
      },
      {
        id: 13,
        name: "Product 13",
        price: 30,
        photo: "https://dsm01pap007files.storage.live.com/y4mnmbXpMyt_bctoyuZC2r21rKU8ZcEHqk1yxvtoAn4kP1dF9zfrb8cwDvxns-2XcS3hvV3DDyEpXRmbQzvD8PPL4V0QdA-0xos6_tBDZP1CuquWuh1kO9Kd0YSy4qf27_jTdHXRrIiTSDF6ESFumlQbNeJ0iddLC2QZnOYGApwPdTNzNW8d6vIzZ5g7uX9Sdix?width=970&height=1170&cropmode=none",
      },
      {
          id: 14,
          name: "Product 14",
          price: 30,
          photo: "https://dsm01pap007files.storage.live.com/y4mr2516uYXUWADGBUSa7vfLBxDDfSlxaxTl7WZtNzyUzj0HZstF-eHD75rz3mK-4L_ManP71rbriHNvPkpV0E94-mzlXUgE0-_98o-CuuRHtFntzs0-QqhXiqb2vvqkXpNl0o_OUMQVSTKRIfHUV4I06YIReHLdNDivg0BzivuVItitc4aHTpPV_GrqO5XB9Cw?width=1600&height=1259&cropmode=none",
        },
        {
          id: 15,
          name: "Product 15",
          price: 30,
          photo: "https://www.exoticgardening.com/wp-content/uploads/2016-09-21-22.43.15-2550x3400.jpg",
        },
        
    // add more products here
  ];
  export default products;