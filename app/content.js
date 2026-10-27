// Datos del tablero: Repricing Pago Nube AR (Q4-26). Fuentes: HubSpot (Email), Userflow (Inapp) y sheet BBDD Actualizada.
export const content = {
 "segments": {
  "1": {
   "name": "Suba de tramos inactivos",
   "base": 4881,
   "impactados": 1888,
   "email_unicos": 1888,
   "inapp_unicos": 0,
   "email": {
    "enviados": 8062,
    "entregados": 8036,
    "suprimidos": 974,
    "aperturas": 2305,
    "clics": 16,
    "open_rate": 0.28683424589347933,
    "ctor": 0.006941431670281995
   },
   "inapp": null,
   "res": {
    "n": 1888,
    "conv": 1111,
    "cvr": 0.5884533898305084,
    "conv2": 653,
    "cvr2": 0.3458686440677966
   },
   "ref_no_impactados": {
    "n": 2993,
    "conv": 1699,
    "cvr": 0.5676578683595055,
    "conv2": 972,
    "cvr2": 0.32475776812562646
   },
   "gpv_imp": {
    "t-3": 411658109.40000004,
    "t-2": 512304692.29,
    "t-1": 503435973.44000006,
    "t+1": 465593995.54,
    "t+2": 431376972.14
   },
   "gpv_pre_avg": 475799591.71000004,
   "gpv_post_avg": 448485483.84000003,
   "gpv_var": -0.057406749282475134,
   "gpv_non": {
    "t-3": 675625078.75,
    "t-2": 743666387.47,
    "t-1": 774681202.48,
    "t+1": 723832783.49,
    "t+2": 628582224.47
   },
   "gpv_var_non": -0.07536564111255552,
   "outcomes": {
    "aumento": 557,
    "bajo": 458,
    "desactivo": 455,
    "sin_gpv": 322,
    "activo": 96
   },
   "outcomes_non": {
    "aumento": 788,
    "desactivo": 774,
    "bajo": 727,
    "sin_gpv": 520,
    "activo": 184
   },
   "canales": null
  },
  "2": {
   "name": "Suba de tramos activos",
   "base": 1247,
   "impactados": 578,
   "email_unicos": 578,
   "inapp_unicos": 0,
   "email": {
    "enviados": 2616,
    "entregados": 2608,
    "suprimidos": 327,
    "aperturas": 760,
    "clics": 8,
    "open_rate": 0.29141104294478526,
    "ctor": 0.010526315789473684
   },
   "inapp": null,
   "res": {
    "n": 578,
    "conv": 484,
    "cvr": 0.8373702422145328,
    "conv2": 224,
    "cvr2": 0.3875432525951557
   },
   "ref_no_impactados": {
    "n": 669,
    "conv": 556,
    "cvr": 0.8310911808669657,
    "conv2": 251,
    "cvr2": 0.375186846038864
   },
   "gpv_imp": {
    "t-3": 392310494.81,
    "t-2": 433533148.52,
    "t-1": 461611991.02,
    "t+1": 403880028.6,
    "t+2": 365201802.97
   },
   "gpv_pre_avg": 429151878.1166666,
   "gpv_post_avg": 384540915.785,
   "gpv_var": -0.10395145543214639,
   "gpv_non": {
    "t-3": 372583750.2,
    "t-2": 511968530.96999997,
    "t-1": 513917500.16999996,
    "t+1": 452142475.14,
    "t+2": 394373723.78
   },
   "gpv_var_non": -0.09202593054008307,
   "outcomes": {
    "bajo": 260,
    "aumento": 218,
    "desactivo": 81,
    "sin_gpv": 13,
    "activo": 6
   },
   "outcomes_non": {
    "bajo": 305,
    "aumento": 242,
    "desactivo": 90,
    "sin_gpv": 23,
    "activo": 9
   },
   "canales": null
  },
  "3": {
   "name": "Mixto (subas y bajas)",
   "base": 168,
   "impactados": 74,
   "email_unicos": 74,
   "inapp_unicos": 0,
   "email": {
    "enviados": 354,
    "entregados": 349,
    "suprimidos": 56,
    "aperturas": 102,
    "clics": 2,
    "open_rate": 0.2922636103151863,
    "ctor": 0.0196078431372549
   },
   "inapp": null,
   "res": {
    "n": 74,
    "conv": 62,
    "cvr": 0.8378378378378378,
    "conv2": 30,
    "cvr2": 0.40540540540540543
   },
   "ref_no_impactados": {
    "n": 94,
    "conv": 73,
    "cvr": 0.776595744680851,
    "conv2": 34,
    "cvr2": 0.3617021276595745
   },
   "gpv_imp": {
    "t-3": 59859933.78,
    "t-2": 75529472.55999999,
    "t-1": 68805805.53000002,
    "t+1": 66142662.03,
    "t+2": 54642376.76
   },
   "gpv_pre_avg": 68065070.62333333,
   "gpv_post_avg": 60392519.394999996,
   "gpv_var": -0.1127237679777433,
   "gpv_non": {
    "t-3": 72353708.11000001,
    "t-2": 63315490.120000005,
    "t-1": 62619776.73000001,
    "t+1": 67689764.01,
    "t+2": 57153768.67
   },
   "gpv_var_non": -0.055593993272817034,
   "outcomes": {
    "bajo": 32,
    "aumento": 29,
    "desactivo": 8,
    "sin_gpv": 4,
    "activo": 1
   },
   "outcomes_non": {
    "bajo": 39,
    "aumento": 32,
    "desactivo": 19,
    "sin_gpv": 2,
    "activo": 2
   },
   "canales": null
  },
  "4": {
   "name": "Baja · tiene cuotas con PN",
   "base": 3355,
   "impactados": 3083,
   "email_unicos": 1455,
   "inapp_unicos": 2925,
   "email": {
    "enviados": 6071,
    "entregados": 6043,
    "suprimidos": 807,
    "aperturas": 1831,
    "clics": 16,
    "open_rate": 0.3029952010590766,
    "ctor": 0.008738394320043691
   },
   "inapp": {
    "views": 2946,
    "clics": 698,
    "ctr": 0.23693143245078072,
    "sesiones": 3951
   },
   "res": {
    "n": 3083,
    "conv": 2084,
    "cvr": 0.6759649691858579,
    "conv2": 1113,
    "cvr2": 0.36101200129743755
   },
   "ref_no_impactados": {
    "n": 272,
    "conv": 103,
    "cvr": 0.3786764705882353,
    "conv2": 65,
    "cvr2": 0.23897058823529413
   },
   "gpv_imp": {
    "t-3": 1663784726.3899999,
    "t-2": 1953497937.97,
    "t-1": 1898017919.5299997,
    "t+1": 1731385708.4299998,
    "t+2": 1600636151.46
   },
   "gpv_pre_avg": 1838433527.9633331,
   "gpv_post_avg": 1666010929.945,
   "gpv_var": -0.09378777932175097,
   "gpv_non": {
    "t-3": 51056817.95,
    "t-2": 53962502.470000006,
    "t-1": 45910020.629999995,
    "t+1": 40794317.92,
    "t+2": 37728986.06
   },
   "gpv_var_non": -0.21960199951459336,
   "outcomes": {
    "bajo": 971,
    "aumento": 947,
    "desactivo": 615,
    "sin_gpv": 384,
    "activo": 166
   },
   "outcomes_non": {
    "desactivo": 89,
    "sin_gpv": 80,
    "aumento": 51,
    "bajo": 38,
    "activo": 14
   },
   "canales": {
    "solo_email": {
     "n": 158,
     "conv": 57,
     "cvr": 0.36075949367088606,
     "conv2": 25,
     "cvr2": 0.15822784810126583
    },
    "solo_inapp": {
     "n": 1628,
     "conv": 1104,
     "cvr": 0.6781326781326781,
     "conv2": 602,
     "cvr2": 0.36977886977886976
    },
    "ambos": {
     "n": 1297,
     "conv": 923,
     "cvr": 0.7116422513492675,
     "conv2": 486,
     "cvr2": 0.3747108712413261
    }
   }
  },
  "5": {
   "name": "Baja · sin cuotas, PN activo",
   "base": 275,
   "impactados": 253,
   "email_unicos": 118,
   "inapp_unicos": 242,
   "email": {
    "enviados": 682,
    "entregados": 681,
    "suprimidos": 84,
    "aperturas": 170,
    "clics": 4,
    "open_rate": 0.24963289280469897,
    "ctor": 0.023529411764705882
   },
   "inapp": {
    "views": 243,
    "clics": 46,
    "ctr": 0.18930041152263374,
    "sesiones": 381
   },
   "res": {
    "n": 253,
    "conv": 47,
    "cvr": 0.1857707509881423
   },
   "ref_no_impactados": {
    "n": 22,
    "conv": 2,
    "cvr": 0.09090909090909091
   },
   "gpv_imp": {
    "t-3": 0.0,
    "t-2": 2427611.96,
    "t-1": 4222878.16,
    "t+1": 7505580.95,
    "t+2": 19418036.08
   },
   "gpv_pre_avg": 2216830.04,
   "gpv_post_avg": 13461808.514999999,
   "gpv_var": 5.072548762015151,
   "gpv_non": {
    "t-3": 0.0,
    "t-2": 0.0,
    "t-1": 690617.6000000001,
    "t+1": 220926.0,
    "t+2": 157708.88
   },
   "gpv_var_non": -0.17761678821970375,
   "outcomes": {
    "sin_gpv": 194,
    "activo": 35,
    "desactivo": 12,
    "aumento": 9,
    "bajo": 3
   },
   "outcomes_non": {
    "sin_gpv": 19,
    "bajo": 1,
    "aumento": 1,
    "desactivo": 1
   },
   "canales": {
    "solo_email": {
     "n": 11,
     "conv": 3,
     "cvr": 0.2727272727272727
    },
    "solo_inapp": {
     "n": 135,
     "conv": 28,
     "cvr": 0.2074074074074074
    },
    "ambos": {
     "n": 107,
     "conv": 16,
     "cvr": 0.14953271028037382
    }
   }
  },
  "6": {
   "name": "Baja · sin cuotas, sin PN activo",
   "base": 1453,
   "impactados": 1024,
   "email_unicos": 459,
   "inapp_unicos": 969,
   "email": {
    "enviados": 2689,
    "entregados": 2678,
    "suprimidos": 502,
    "aperturas": 646,
    "clics": 6,
    "open_rate": 0.24122479462285287,
    "ctor": 0.009287925696594427
   },
   "inapp": {
    "views": 974,
    "clics": 82,
    "ctr": 0.08418891170431211,
    "sesiones": 1513
   },
   "res": {
    "n": 1024,
    "conv": 37,
    "cvr": 0.0361328125,
    "conv2": 50,
    "cvr2": 0.048828125
   },
   "ref_no_impactados": {
    "n": 429,
    "conv": 4,
    "cvr": 0.009324009324009324,
    "conv2": 4,
    "cvr2": 0.009324009324009324
   },
   "gpv_imp": {
    "t-3": 0.0,
    "t-2": 1157083.02,
    "t-1": 18245774.16,
    "t+1": 23492846.01,
    "t+2": 42079942.36
   },
   "gpv_pre_avg": 6467619.06,
   "gpv_post_avg": 32786394.185000002,
   "gpv_var": 4.069314361412004,
   "gpv_non": {
    "t-3": 0.0,
    "t-2": 0.0,
    "t-1": 0.0,
    "t+1": 1496053.0,
    "t+2": 2723840.04
   },
   "gpv_var_non": null,
   "outcomes": {
    "sin_gpv": 965,
    "activo": 37,
    "desactivo": 9,
    "bajo": 7,
    "aumento": 6
   },
   "outcomes_non": {
    "sin_gpv": 425,
    "activo": 4
   },
   "canales": {
    "solo_email": {
     "n": 55,
     "conv": 1,
     "cvr": 0.01818181818181818,
     "conv2": 2,
     "cvr2": 0.03636363636363636
    },
    "solo_inapp": {
     "n": 565,
     "conv": 20,
     "cvr": 0.035398230088495575,
     "conv2": 26,
     "cvr2": 0.04601769911504425
    },
    "ambos": {
     "n": 404,
     "conv": 16,
     "cvr": 0.039603960396039604,
     "conv2": 22,
     "cvr2": 0.054455445544554455
    }
   }
  }
 },
 "total": {
  "email": {
   "enviados": 20474,
   "entregados": 20395,
   "aperturas": 5814,
   "clics": 52,
   "suprimidos": 2750,
   "open_rate": 0.2850698700661927,
   "ctor": 0.008943928448572412
  },
  "inapp": {
   "views": 4163,
   "clics": 826,
   "ctr": 0.19841460485227,
   "sesiones": 5845
  },
  "impactados": 6900,
  "base": 11379,
  "conv": 3825,
  "cvr": 0.5543478260869565,
  "conv2": 2070,
  "n2": 6647,
  "cvr2": 0.31141868512110726,
  "solo_email_segs": {
   "n": 2540,
   "conv": 1657,
   "cvr": 0.6523622047244094
  },
  "email_inapp_segs": {
   "n": 4360,
   "conv": 2168,
   "cvr": 0.4972477064220184
  },
  "gpv_imp": {
   "t-3": 2527613264.38,
   "t-2": 2978449946.32,
   "t-1": 2954340341.8399997,
   "t+1": 2698000821.56,
   "t+2": 2513355281.77
  },
  "gpv_non": {
   "t-3": 1171619355.01,
   "t-2": 1372912911.03,
   "t-1": 1397819117.61,
   "t+1": 1286176319.56,
   "t+2": 1120720251.9
  }
 }
};
