const menuData = {
    "SOUPS": [
        "1. Veg Manchurian Soup", "2. Veg Hot & Sour Soup", "4. Veg Clear Soup", 
        "6. Lemon Coriander Soup", "7. Cream of Tomato Soup", "8. Tomato Soup", 
        "9. Chicken Manchow Soup", "10. Chicken Hot & Sour Soup", "11. Chicken Clear Soup", 
        "12. Chicken Sweet Corn Soup", "13. Chicken Lemon Coriander Soup", 
        "14. Chicken Clear Soup", "15. Cream of Chicken Soup", "16. Chicken Noodle Soup"
    ],
    "VEG STARTERS": [
        "17. Paneer Tikka", "18. Paneer 65", "19. Cheese Finger / Ball", "20. French Fries", 
        "21. Crispy Corn", "22. Veg Crispy", "23. Veg Manchurian", "24. Hara Bhara Kabab", 
        "25. Veg 65", "26. Tandoori Aloo", "27. Tandoori Mushroom", "28. Tandoori Gobi", 
        "29. Paneer Malai Tikka", "30. Paneer Achari Tikka", "31. Paneer Haryali Tikka", 
        "32. Paneer Chilli", "33. Paneer Schezwan", "34. Honey Chilli Potato", "35. Paneer Pepper Fry", 
        "36. Paneer Salt & Pepper", "37. Stuffed Mushroom", "38. Cheese Corn Ball", 
        "39. Soya Chilli", "40. Soya Chaap Tikka", "41. Soya Malai Chaap", "42. Assorted Veg Platter", "43. Besan Chilla", "44. Moong Daal Chilla",
        "45. Tikki Chat", "45A. Samosa Chat", "46. Gol gappa", 
    ],
    "CHICKEN STARTERS": [
        "43. Chicken Tikka", "44. Chicken Tandoori (Half)", "45. Chicken Tandoori (Full)", 
        "46. Chicken Malai Tikka", "47. Chicken Achari Tikka", "48. Chicken Haryali Tikka", 
        "49. Chicken Reshmi Kabab", "50. Chicken Seekh Kabab", "51. Chicken Chilli", 
        "52. Chicken 65", "53. Chicken Manchurian", "54. Chicken Lollipop", 
        "55. Chicken Garlic Kebab", "56. Chicken Ginger Kebab", "57. Chicken Pepper Fry", 
        "58. Chef's Special Chicken", "59. Royal Chicken Starter"
    ],
    "MUTTON STARTERS": [
        "60. Mutton Seekh Kabab", "61. Mutton Shami Kabab", "62. Mutton Boti Kabab", 
        "63. Mutton Chilli", "64. Mutton Pepper Fry"
    ],
    "FISH & SEAFOOD": [
        "65. Fish Tikka", "66. Fish Amritsari", "67. Fish Finger", "68. Fish Chilli", 
        "69. Fish 65", "70. Fish Fry", "71. Fish Tandoori", "72. Fish Garlic / Ginger", 
        "73. Prawn Chilli", "74. Prawn 65", "75. Prawn Golden Fry", "76. Prawn Tandoori", 
        "77. Chilli Garlic Prawn", "78. Salt & Pepper Prawn"
    ],
    "VEG MAIN COURSE": [
        "79. Paneer Butter Masala", "80. Paneer Kadhai", "81. Paneer Do Pyaza", 
        "82. Paneer Handi", "83. Paneer Tikka Masala", "84. Paneer Pasanda", 
        "85. Paneer Shahi", "86. Paneer Bhurji", "87. Paneer Lababdar", "88. Shahi Paneer", 
        "89. Mattar Paneer", "90. Matar Mushroom", "91. Veg Kadhai", "92. Veg Makhanwala", 
        "93. Veg Jaipuri", "94. Veg Diwani Handi", "95. Veg Jalfrezi", "96. Veg Kolhapuri", 
        "97. Veg Bhuna", "98. Mushroom Masala", "99. Mushroom Kadhai", "100. Mushroom Do Pyaza", 
        "101. Mutter Mushroom", "102. Babycorn Mushroom Masala", "103. Babycorn Masala", 
        "104. Babycorn Jalfrezi", "105. Aloo Gobi Matar", "106. Jeera Aloo", "107. Dum Aloo Kashmiri", 
        "108. Dum Aloo Bhojpuri", "109. Aloo Do Pyaza", "110. Dal Fry", "111. Dal Tadka", 
        "112. Dal Makhani", "113. Dal Handi", "114. Rajma Masala", "115. Chole Masala", "116. Soya Chaap Masala"
    ],
    "CHICKEN MAIN COURSE": [
        "117. Chicken Butter Masala", "118. Chicken Kadhai", "119. Chicken Handi", 
        "120. Chicken Do Pyaza", "121. Chicken Tikka Masala", "122. Chicken Bhuna Masala", 
        "123. Chicken Curry", "124. Chicken Dehati", "125. Chicken Mughlai", "126. Chicken Korma", 
        "127. Chicken Lababdar", "128. Chicken Masala", "129. Chicken Rara", "130. Chicken Kasuri", 
        "131. Chicken Hyderabadi", "132. Chicken Saagwala"
    ],
    "MUTTON MAIN COURSE": [
        "133. Mutton Rogan Josh", "134. Mutton Kadhai", "135. Mutton Handi", "136. Mutton Do Pyaza", 
        "137. Mutton Curry", "138. Mutton Bhuna Masala", "139. Mutton Rara", "140. Mutton Dehati"
    ],
    "CHINESE (RICE & NOODLES)": [
        "168. Veg Fried Rice", "169. Paneer Fried Rice", "170. Egg Fried Rice", "171. Chicken Fried Rice", 
        "172. Veg Schezwan Fried Rice", "173. Chicken Schezwan Fried Rice", "174. Schezwan Egg Fried Rice", 
        "175. Burnt Garlic Fried Rice Veg", "176. Burnt Garlic Fried Rice Chicken", "177. Veg Hakka Noodles", 
        "178. Egg Hakka Noodles", "179. Chicken Hakka Noodles", "180. Veg Schezwan Noodles", 
        "181. Egg Schezwan Noodles", "182. Chicken Schezwan Noodles", "183. Chicken Chilli Garlic Noodles", 
        "184. Veg Chilli Garlic Noodles", "185. Spicy Singapore Noodles Veg", "186. Spicy Singapore Noodles Chicken", 
        "187. Paneer Fried Noodles", "188. Babycorn Chilli", "189. Babycorn Manchurian", 
        "190. Chicken Manchurian Gravy", "191. Hong Kong Fried Rice Veg", "192. Chicken Hong Kong Fried Rice", 
        "193. Veg American Chopsuey", "194. Chicken American Chopsuey", "195. Veg Triple Schezwan Rice", 
        "196. Chicken Triple Schezwan Rice", "197. Veg Manchurian Noodles", "198. Chicken Manchurian Noodles", "199. Mixed Fried Rice"
    ],
    "RICE & BIRYANI": [
        "200. Plain Rice", "201. Steamed Rice", "202. Jeera Rice", "203. Vegetable Pulao", 
        "204. Green Peas Pulao", "205. Kashmiri Pulao", "206. Veg Biryani", "207. Hyderabadi Veg Biryani", 
        "208. Paneer Biryani", "209. Egg Biryani", "210. Chicken Biryani", "211. Chicken Tikka Biryani", 
        "212. Hyderabadi Chicken Biryani", "213. Mutton Biryani", "214. Tandoori Chicken Biryani", 
        "215. Fish Biryani", "216. Prawn Biryani"
    ],
    "ROTI, NAAN & BREADS": [
        "217. Tawa Roti", "218. Tawa Butter Roti", "219. Tandoori Roti", "220. Tandoori Butter Roti", 
        "221. Plain Naan", "222. Butter Naan", "223. Garlic Naan", "224. Cheese Naan", 
        "225. Cheese Garlic Naan", "226. Kabuli Naan", "227. Masala Kulcha", "228. Paneer Kulcha", 
        "229. Aloo Kulcha", "230. Plain Paratha", "231. Lachha Paratha", "232. Aloo Paratha", 
        "233. Paneer Paratha", "234. Assorted Bread Basket", "235. Butter Kulcha"
    ],
    "JHARKHAND SPECIALITIES": [
        "249. Dhuska (Plain)", "250. Dhuska with Ghugni", "251. Dhilka", "252. Chilka Roti", 
        "253. Rugra Masala", "254. Putu Masala", "255. Bamboo Shoot Sabzi", "256. Tribal Mutton Curry", 
        "257. Handi Mutton (Jharkhand Style)", "258. Jhaspa Chicken", "259. Desai Chicken Curry", 
        "260. Jhalmuri", "261. Bhatha (Baingan Bharta Style)", "262. Arsa Pitha", "263. Chilka Pitha", 
        "264. Marua (Ragi) Roti", "265. Gur Pitha"
    ],
    "DESSERT": [
        "276. Ice Cream (Vanilla/Chocolate)", "277. Gulab Jamun", "278. Rasgulla", 
        "279. Rasmalai", "280. Gur Kheer", "280A. Normal Sugar Kheer", "281. Gajar Ka Halwa (Seasonal)", "282. Moong Dal Halwa", 
        "283. Fried Ice Cream", "284. Brownie with Ice Cream", "285. Brownie", 
    ],
    "BEVERAGES": [
        "286. Tea (Plain/Masala)", "287. Milk Coffee", "287A. Black Coffee", "288. Lemon Tea", "289. Lemon Soda (Salt/Sweet)", 
        "290. Fresh Lime Water", "291. Cold Drinks (Can/Pet)", "292. Salted Lassi", "293. Sweet Lassi", 
        "294. Buttermilk (Chaas)", "295. Jeera Soda", "296. Saffron Lassi", "297. Mango Lassi", 
        "298. Packaged Drinking Water", "299. Mineral Water", "300. Vanilla Shake", "301. Chocolate Shake", 
        "302. Strawberry Shake", "303. Dry Fruit Shake", "304. Virgin Mojito", "305. Blue Lagoon", 
        "306. Carbonated Mocktail", "307. Spiced Buttermilk", "308A. Sugarcane Juice", "308B. Bel Juice", "308C. Water melon Juice", 
        "309. Aam Panna",
    ],
    "SOUTH INDIAN": [
        "310. Plain Idli (2 Pcs)", "311. Mini Idli (Sambar)", "312. Fried Idli", "313. Rava Idli", 
        "314. Podi Idli", "315. Plain Dosa", "316. Masala Dosa", "317. Butter Plain Dosa", 
        "318. Mysore Masala Dosa", "319. Rava Plain Dosa", "320. Ghee Roast Dosa", 
        "321. Onion Rava Masala Dosa", "322. Cheese Masala Dosa", "323. Paneer Masala Dosa", 
        "324. Rava Masala Dosa", "325. Set Dosa", "326. Spring Dosa", "327. Sweet Dosa", 
        "328. Chicken Masala Dosa", "329. Egg Dosa", "330. Plain Uttapam", "331. Tomato Uttapam", 
        "332. Vegetable Uttapam", "333. Cheese Uttapam", "334. Onion Uttapam", "335. Paneer Uttapam", 
        "336. Mix Veg Uttapam", "337. Medu Vada (2 Pcs)", "338. Sambar Vada", "339. Dahi Vada", "340. Appam",
    ],
    "SPECIAL CHEF RECOMMENDATIONS": [
        "358. Patrani Machhi", "359. Jhange Masala (Prawns)", "360. Chicken Bharta", 
        "361. Mutton Handi (Special)", "362. Soya Chaap Makhani", "363. Chicken Rara Gravy", 
        "364. Fish Amritsari Tandoori", "365. Paneer Dilkhush", "366. Delhi Style Butter Chicken", 
        "367. Shahi Tukda", "368. Chicken Tikka Lababdar", "369. Fish Tikka Masala", 
        "370. Jharkhandi Special Thali", "371. Marua Roti with Chicken Curry", "372. Jharkhandi Veg Thali", 
        "373. Special Mocktail", "374. Continental Sizzler Veg", "375. Family Pack Biryani"
    ]
};
