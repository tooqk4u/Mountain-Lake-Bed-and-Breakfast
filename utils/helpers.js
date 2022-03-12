const dayjs = require('dayjs')
module.exports = {
    format_date: date => {
      return dayjs(date).format('MM/DD/YYYY');
    },
    format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
      },
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
      },
      choose_comment: list =>{
        try{
        const comment = list[Math.floor(Math.random() * list.length)]
        return `${comment.comment_text} -- ${comment.user.first_name}`}
        catch{
          return "Be the first to comment"
        }
      },

      stay_estimate: (start_date, end_date ,room_rate) =>{
        end_date = dayjs(end_date)
        console.log(end_date.diff(start_date, 'day'),  room_rate)
      return end_date.diff(start_date, 'day') * parseInt(room_rate)}


    }