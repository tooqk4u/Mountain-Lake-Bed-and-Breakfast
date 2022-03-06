const { Comment } = require('../models');

const commentData = [
  {
    user_id: 12,
    room_id: 0,
    comment_text:'Excellent bartender! My bartender Jason was extremely nice, approachable, and knowledgeable about different cocktails. An amazing person who is very well versed in mixology. The venue was very nice with a log cabin feel that was extremely homely',
  },
  {
    user_id:0, 
    room_id:9, 
    comment_text:'I cannot speak more highly about this property. Dog friendly. Beautiful grounds. Great spa. Fire pit at night. Great sports bar, service was amazing and I cannot wait to go back. Golf and tennis and lots of activities.',
  },
  {
    user_id: 13,
    room_id: 3,
    comment_text:'Ralph was very attentive and customer-oriented. He gave my friend and I the best golf cart ride ever, and he recommended great meals for the Gates Grill.The food from gates grill was also amazing! I would totally recommend the impossible burger if you lead a vegan lifestyle.',
  }, 
  {
    user_id: 11,
    room_id: 7,
    comment_text:'Wanted to write a quick review on how great Ralph was. He was very courteous and knowledgeable as well as being funny. He was very kind and gave my friend and I a ride down to the Gates Grill. He also offered us a ride back once we were done.',
  }, 
  {
    user_id: 14, 
    room_id: 1,
    comment_text:'Such an amazing resort we’ve been too..Thanks to all the staff, very accommodating.. Ms Cathy and Mr. Ralph for touring us around the resort. Hoping to visit this resort again.',
  }, 
  {
    user_id: 9, 
    room_id: 1,
    comment_text:'This place is awesome!! Got a room overlooking the mountain!! A great way to start your day!! Rooms is great, clean and a home away from home!!! Staff is great!!! Ms. Fisher recommended this place and im glad she did!! .. great customer service and extremely professional.',
  },
  {
    user_id: 5, 
    room_id: 4,
    comment_text:'Very nice rooms and staff (especially Ralph). Loved the view and swimming pool. The buffet was too expensive but the other dining options were great. I would stay there again for sure and would recommend it for families.',
  },
  {
    user_id: 10,
    room_id: 8,
    comment_text:'his place is great. Amazing views, great food. Fantastic service. Emily at the Gates Grille is an attentive server who made us feel like we were the only guests in the restaurant even though they were fairly busy.',
  },
  {
    user_id: 8,
    room_id: 2,
    comment_text:'Staff was wonderful and extremely helpful when we unexpectedly had to vacate our apartment for a few days and needed an early check-in. The rooms are clean and the property is beautiful! Will definitely recommend to anyone',
  },
  {
    user_id: 4,
    room_id: 5,
    comment_text:'I was here for a weekend with my family. We had an amazing time!! It was an extraordinary experience we spend time in the pool and walking around the whole place.',
  },
  {
    user_id: 7,
    room_id: 2,
    comment_text:'he Resort is a lovely place to visit and to relax at. The site is marvelous. Wonderful view of the mountains. My negative is the prices for room service with the 23% Extra changes plus tip is too high. All the chips, water and coke drinks are too high, purchase price just to have a micro wave is crazy as well.',
  },
  {
    user_id: 3,
    room_id: 6,
    comment_text:'Amazing place, amazing and friendly staff',
  },
  {
    user_id: 6,
    room_id: 9,
    comment_text:'Had a great time at elevations bar! Paul made amazing drinks!! He definitely contributed to a good evening. We have personally had a very pleasant experience at this resort and would feel comfortable recommending it.',
  },
  {
    user_id: 2,
    room_id: 0,
    comment_text:'I was expecting more from Wyndham. The name and pictures of all the activities are are deceiving. I was expecting more for my family and I got less. Upon arrival we were told to call the front desk to have your room cleaned. They were honest about that. We had to call everyday to have our room "cleaned". The toilet was never cleaned for the week that we were there.',
  },
  {
    user_id: 1,
    room_id: 6,
    comment_text:'Awful service. Views are great but the services was terrible',
  },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
