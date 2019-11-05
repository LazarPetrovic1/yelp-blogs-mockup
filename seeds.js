const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

const data = [
  {
    name: "Cloud's Rest",
    image: "https://farm4.staticflickr.com/3186/2965524855_e2e236e0ce.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sapiente ducimus sint ullam, numquam inventore facilis ipsam impedit, atque voluptate eaque rem soluta obcaecati voluptatem natus accusamus dolore commodi assumenda. Est vel possimus fugiat vitae illo fuga quos alias obcaecati esse tempore deleniti iusto voluptatibus sequi nihil unde quas, perspiciatis ipsa in blanditiis ex velit debitis molestias labore iste. Sapiente voluptatem assumenda cumque laudantium, dolorem ex qui molestiae iure, aspernatur tenetur, veritatis quam vitae necessitatibus nemo. Quaerat sunt obcaecati minus eos. Modi sint asperiores labore provident at soluta, blanditiis dolores id, beatae suscipit dolorem recusandae mollitia ad alias est nisi doloremque. Id consequatur voluptates dolorem reprehenderit, optio a quasi nesciunt, labore repellat. Inventore in, fugiat ratione, totam corporis sint officiis illum iste et consequatur fugit exercitationem excepturi numquam porro! Similique fuga dignissimos, cum ea repellendus doloremque quidem laborum quam! Deleniti nisi tempore fugiat eveniet dolorum placeat et consequatur incidunt voluptates. Optio expedita voluptate minus nobis ipsum nihil quod ducimus enim vitae non, delectus, molestiae, debitis quibusdam, laudantium amet doloremque doloribus maiores eum est repellat sunt nulla iure! Autem veritatis, soluta rerum molestias velit nesciunt quis eum commodi! Aperiam suscipit, reiciendis vitae? Temporibus nobis consequuntur ullam quaerat in, cum, maxime commodi unde eligendi sequi, beatae, expedita ad quod culpa mollitia placeat. Alias, culpa facere! Sapiente voluptates explicabo expedita perferendis ea fugiat atque consequuntur, non perspiciatis est itaque, sint natus doloribus ut tempore autem. Eaque suscipit ad facere commodi accusamus sapiente, facilis necessitatibus temporibus libero, dicta, quisquam provident aliquam odit laudantium magni est sed. Doloribus eligendi sapiente necessitatibus cum neque placeat, perspiciatis, illum omnis iure laudantium incidunt provident qui, ipsum. Modi quaerat dignissimos, quo molestiae voluptates odit veniam ipsam quod earum. Ex, sunt nam exercitationem architecto aspernatur, veritatis praesentium quo dicta aperiam illo totam, similique eligendi vitae dolore. Est optio ab facilis debitis dolorum sequi consequuntur beatae ad, tempore aliquid! Dignissimos repudiandae alias optio, ducimus nisi sapiente sit esse minima recusandae corporis facilis provident odio eaque beatae, sint quis molestias at delectus culpa rerum sunt, deserunt quae temporibus. Quia placeat, vel ullam, voluptas maiores nobis odit? Deserunt odit debitis expedita, ad commodi eius, at consequuntur optio totam delectus atque temporibus ducimus quibusdam cupiditate voluptatem nam iste vitae explicabo distinctio eos labore possimus quasi, harum suscipit. Adipisci consequuntur, expedita modi vero tempora pariatur ducimus commodi eveniet reprehenderit maiores architecto unde exercitationem fuga neque eum, excepturi animi culpa nam optio, ut rem. Numquam accusamus quis placeat mollitia voluptatem rem adipisci voluptate sequi nesciunt culpa dignissimos ipsam magni doloribus repudiandae laborum, aspernatur facere temporibus dicta inventore fuga voluptates minus aliquid quia nemo earum! Magni omnis suscipit at culpa atque mollitia facilis adipisci, saepe. Suscipit debitis blanditiis possimus in totam, ex aut dolor enim porro ullam voluptatum fugit, aspernatur est nihil minima repellendus rerum odit molestiae perspiciatis exercitationem? Magni id maxime harum fugit et fuga! Laboriosam neque dolor quam accusamus fuga repudiandae modi quasi veniam autem nostrum, laborum error dolorem nobis sint! Nulla autem dignissimos ullam magnam quo magni iusto tempora, voluptatem ex veniam dicta velit, earum, amet at similique. Ratione perferendis, ad, vel praesentium fuga impedit pariatur cupiditate voluptatum. Amet sequi consequatur quasi, provident, animi quam, dolor omnis nostrum non temporibus expedita quibusdam. Possimus quos labore temporibus ex laboriosam, qui nobis alias autem quasi magnam. Perspiciatis cupiditate suscipit fugit et, facere ullam eveniet inventore dolore delectus, perferendis velit nemo rem dicta, ipsum maxime! Laborum voluptatem, tenetur dolore consequatur sit vero quam molestias ipsum soluta. Nulla corporis quasi excepturi illo ad, assumenda explicabo. Excepturi, eaque recusandae soluta saepe aspernatur asperiores adipisci pariatur. Perspiciatis mollitia quis quo quae eum voluptas dolores assumenda sed eveniet, eligendi sunt. Id molestiae corporis sint, optio. Reprehenderit pariatur minima architecto soluta ratione, explicabo possimus assumenda harum, natus ullam sequi, nemo odit nisi numquam culpa quaerat quidem aperiam dicta temporibus aut magnam praesentium perspiciatis quam error aspernatur! Veritatis quia fuga, aperiam nemo perferendis quo pariatur eligendi necessitatibus rem, sed reprehenderit obcaecati ea minus atque. Neque, delectus iusto ab corporis sint excepturi pariatur voluptatum eum dolores, quo inventore soluta odio obcaecati, veniam repudiandae ducimus. Odio similique dolorem cupiditate cumque modi aspernatur magni temporibus fugit a delectus laboriosam mollitia, voluptatibus numquam dignissimos ratione, esse quaerat adipisci veniam ullam quasi nisi illum officia harum impedit eligendi."
  },
  {
    name: "Grand Hideout",
    image: "https://farm1.staticflickr.com/23/36862842_6898ccbfff.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sapiente ducimus sint ullam, numquam inventore facilis ipsam impedit, atque voluptate eaque rem soluta obcaecati voluptatem natus accusamus dolore commodi assumenda. Est vel possimus fugiat vitae illo fuga quos alias obcaecati esse tempore deleniti iusto voluptatibus sequi nihil unde quas, perspiciatis ipsa in blanditiis ex velit debitis molestias labore iste. Sapiente voluptatem assumenda cumque laudantium, dolorem ex qui molestiae iure, aspernatur tenetur, veritatis quam vitae necessitatibus nemo. Quaerat sunt obcaecati minus eos. Modi sint asperiores labore provident at soluta, blanditiis dolores id, beatae suscipit dolorem recusandae mollitia ad alias est nisi doloremque. Id consequatur voluptates dolorem reprehenderit, optio a quasi nesciunt, labore repellat. Inventore in, fugiat ratione, totam corporis sint officiis illum iste et consequatur fugit exercitationem excepturi numquam porro! Similique fuga dignissimos, cum ea repellendus doloremque quidem laborum quam! Deleniti nisi tempore fugiat eveniet dolorum placeat et consequatur incidunt voluptates. Optio expedita voluptate minus nobis ipsum nihil quod ducimus enim vitae non, delectus, molestiae, debitis quibusdam, laudantium amet doloremque doloribus maiores eum est repellat sunt nulla iure! Autem veritatis, soluta rerum molestias velit nesciunt quis eum commodi! Aperiam suscipit, reiciendis vitae? Temporibus nobis consequuntur ullam quaerat in, cum, maxime commodi unde eligendi sequi, beatae, expedita ad quod culpa mollitia placeat. Alias, culpa facere! Sapiente voluptates explicabo expedita perferendis ea fugiat atque consequuntur, non perspiciatis est itaque, sint natus doloribus ut tempore autem. Eaque suscipit ad facere commodi accusamus sapiente, facilis necessitatibus temporibus libero, dicta, quisquam provident aliquam odit laudantium magni est sed. Doloribus eligendi sapiente necessitatibus cum neque placeat, perspiciatis, illum omnis iure laudantium incidunt provident qui, ipsum. Modi quaerat dignissimos, quo molestiae voluptates odit veniam ipsam quod earum. Ex, sunt nam exercitationem architecto aspernatur, veritatis praesentium quo dicta aperiam illo totam, similique eligendi vitae dolore. Est optio ab facilis debitis dolorum sequi consequuntur beatae ad, tempore aliquid! Dignissimos repudiandae alias optio, ducimus nisi sapiente sit esse minima recusandae corporis facilis provident odio eaque beatae, sint quis molestias at delectus culpa rerum sunt, deserunt quae temporibus. Quia placeat, vel ullam, voluptas maiores nobis odit? Deserunt odit debitis expedita, ad commodi eius, at consequuntur optio totam delectus atque temporibus ducimus quibusdam cupiditate voluptatem nam iste vitae explicabo distinctio eos labore possimus quasi, harum suscipit. Adipisci consequuntur, expedita modi vero tempora pariatur ducimus commodi eveniet reprehenderit maiores architecto unde exercitationem fuga neque eum, excepturi animi culpa nam optio, ut rem. Numquam accusamus quis placeat mollitia voluptatem rem adipisci voluptate sequi nesciunt culpa dignissimos ipsam magni doloribus repudiandae laborum, aspernatur facere temporibus dicta inventore fuga voluptates minus aliquid quia nemo earum! Magni omnis suscipit at culpa atque mollitia facilis adipisci, saepe. Suscipit debitis blanditiis possimus in totam, ex aut dolor enim porro ullam voluptatum fugit, aspernatur est nihil minima repellendus rerum odit molestiae perspiciatis exercitationem? Magni id maxime harum fugit et fuga! Laboriosam neque dolor quam accusamus fuga repudiandae modi quasi veniam autem nostrum, laborum error dolorem nobis sint! Nulla autem dignissimos ullam magnam quo magni iusto tempora, voluptatem ex veniam dicta velit, earum, amet at similique. Ratione perferendis, ad, vel praesentium fuga impedit pariatur cupiditate voluptatum. Amet sequi consequatur quasi, provident, animi quam, dolor omnis nostrum non temporibus expedita quibusdam. Possimus quos labore temporibus ex laboriosam, qui nobis alias autem quasi magnam. Perspiciatis cupiditate suscipit fugit et, facere ullam eveniet inventore dolore delectus, perferendis velit nemo rem dicta, ipsum maxime! Laborum voluptatem, tenetur dolore consequatur sit vero quam molestias ipsum soluta. Nulla corporis quasi excepturi illo ad, assumenda explicabo. Excepturi, eaque recusandae soluta saepe aspernatur asperiores adipisci pariatur. Perspiciatis mollitia quis quo quae eum voluptas dolores assumenda sed eveniet, eligendi sunt. Id molestiae corporis sint, optio. Reprehenderit pariatur minima architecto soluta ratione, explicabo possimus assumenda harum, natus ullam sequi, nemo odit nisi numquam culpa quaerat quidem aperiam dicta temporibus aut magnam praesentium perspiciatis quam error aspernatur! Veritatis quia fuga, aperiam nemo perferendis quo pariatur eligendi necessitatibus rem, sed reprehenderit obcaecati ea minus atque. Neque, delectus iusto ab corporis sint excepturi pariatur voluptatum eum dolores, quo inventore soluta odio obcaecati, veniam repudiandae ducimus. Odio similique dolorem cupiditate cumque modi aspernatur magni temporibus fugit a delectus laboriosam mollitia, voluptatibus numquam dignissimos ratione, esse quaerat adipisci veniam ullam quasi nisi illum officia harum impedit eligendi."
  },
  {
    name: "Woody Hitch",
    image: "https://farm3.staticflickr.com/2928/14133964912_af1df5521d.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sapiente ducimus sint ullam, numquam inventore facilis ipsam impedit, atque voluptate eaque rem soluta obcaecati voluptatem natus accusamus dolore commodi assumenda. Est vel possimus fugiat vitae illo fuga quos alias obcaecati esse tempore deleniti iusto voluptatibus sequi nihil unde quas, perspiciatis ipsa in blanditiis ex velit debitis molestias labore iste. Sapiente voluptatem assumenda cumque laudantium, dolorem ex qui molestiae iure, aspernatur tenetur, veritatis quam vitae necessitatibus nemo. Quaerat sunt obcaecati minus eos. Modi sint asperiores labore provident at soluta, blanditiis dolores id, beatae suscipit dolorem recusandae mollitia ad alias est nisi doloremque. Id consequatur voluptates dolorem reprehenderit, optio a quasi nesciunt, labore repellat. Inventore in, fugiat ratione, totam corporis sint officiis illum iste et consequatur fugit exercitationem excepturi numquam porro! Similique fuga dignissimos, cum ea repellendus doloremque quidem laborum quam! Deleniti nisi tempore fugiat eveniet dolorum placeat et consequatur incidunt voluptates. Optio expedita voluptate minus nobis ipsum nihil quod ducimus enim vitae non, delectus, molestiae, debitis quibusdam, laudantium amet doloremque doloribus maiores eum est repellat sunt nulla iure! Autem veritatis, soluta rerum molestias velit nesciunt quis eum commodi! Aperiam suscipit, reiciendis vitae? Temporibus nobis consequuntur ullam quaerat in, cum, maxime commodi unde eligendi sequi, beatae, expedita ad quod culpa mollitia placeat. Alias, culpa facere! Sapiente voluptates explicabo expedita perferendis ea fugiat atque consequuntur, non perspiciatis est itaque, sint natus doloribus ut tempore autem. Eaque suscipit ad facere commodi accusamus sapiente, facilis necessitatibus temporibus libero, dicta, quisquam provident aliquam odit laudantium magni est sed. Doloribus eligendi sapiente necessitatibus cum neque placeat, perspiciatis, illum omnis iure laudantium incidunt provident qui, ipsum. Modi quaerat dignissimos, quo molestiae voluptates odit veniam ipsam quod earum. Ex, sunt nam exercitationem architecto aspernatur, veritatis praesentium quo dicta aperiam illo totam, similique eligendi vitae dolore. Est optio ab facilis debitis dolorum sequi consequuntur beatae ad, tempore aliquid! Dignissimos repudiandae alias optio, ducimus nisi sapiente sit esse minima recusandae corporis facilis provident odio eaque beatae, sint quis molestias at delectus culpa rerum sunt, deserunt quae temporibus. Quia placeat, vel ullam, voluptas maiores nobis odit? Deserunt odit debitis expedita, ad commodi eius, at consequuntur optio totam delectus atque temporibus ducimus quibusdam cupiditate voluptatem nam iste vitae explicabo distinctio eos labore possimus quasi, harum suscipit. Adipisci consequuntur, expedita modi vero tempora pariatur ducimus commodi eveniet reprehenderit maiores architecto unde exercitationem fuga neque eum, excepturi animi culpa nam optio, ut rem. Numquam accusamus quis placeat mollitia voluptatem rem adipisci voluptate sequi nesciunt culpa dignissimos ipsam magni doloribus repudiandae laborum, aspernatur facere temporibus dicta inventore fuga voluptates minus aliquid quia nemo earum! Magni omnis suscipit at culpa atque mollitia facilis adipisci, saepe. Suscipit debitis blanditiis possimus in totam, ex aut dolor enim porro ullam voluptatum fugit, aspernatur est nihil minima repellendus rerum odit molestiae perspiciatis exercitationem? Magni id maxime harum fugit et fuga! Laboriosam neque dolor quam accusamus fuga repudiandae modi quasi veniam autem nostrum, laborum error dolorem nobis sint! Nulla autem dignissimos ullam magnam quo magni iusto tempora, voluptatem ex veniam dicta velit, earum, amet at similique. Ratione perferendis, ad, vel praesentium fuga impedit pariatur cupiditate voluptatum. Amet sequi consequatur quasi, provident, animi quam, dolor omnis nostrum non temporibus expedita quibusdam. Possimus quos labore temporibus ex laboriosam, qui nobis alias autem quasi magnam. Perspiciatis cupiditate suscipit fugit et, facere ullam eveniet inventore dolore delectus, perferendis velit nemo rem dicta, ipsum maxime! Laborum voluptatem, tenetur dolore consequatur sit vero quam molestias ipsum soluta. Nulla corporis quasi excepturi illo ad, assumenda explicabo. Excepturi, eaque recusandae soluta saepe aspernatur asperiores adipisci pariatur. Perspiciatis mollitia quis quo quae eum voluptas dolores assumenda sed eveniet, eligendi sunt. Id molestiae corporis sint, optio. Reprehenderit pariatur minima architecto soluta ratione, explicabo possimus assumenda harum, natus ullam sequi, nemo odit nisi numquam culpa quaerat quidem aperiam dicta temporibus aut magnam praesentium perspiciatis quam error aspernatur! Veritatis quia fuga, aperiam nemo perferendis quo pariatur eligendi necessitatibus rem, sed reprehenderit obcaecati ea minus atque. Neque, delectus iusto ab corporis sint excepturi pariatur voluptatum eum dolores, quo inventore soluta odio obcaecati, veniam repudiandae ducimus. Odio similique dolorem cupiditate cumque modi aspernatur magni temporibus fugit a delectus laboriosam mollitia, voluptatibus numquam dignissimos ratione, esse quaerat adipisci veniam ullam quasi nisi illum officia harum impedit eligendi."
  }
];

function seedDB() {
  // Removing al the campgrounds
  Campground.deleteMany({}, err => {
    // if (err) console.log(err);
    // console.log("Removed");
    // // Adding some campgrounds
    // data.forEach(datum => {
    //   Campground.create(datum, (err, camp) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("Added a campground");
    //       // Add a comment
    //       Comment.create(
    //         {
    //           text: "This place is great, but I wish there were Internet",
    //           author: "Homer"
    //         },
    //         (err, comm) => {
    //           if (err) console.log(err);
    //           else {
    //             camp.comments.push(comm);
    //             camp.save();
    //             console.log("Created a new campground");
    //           }
    //         }
    //       );
    //     }
    //   });
    // });
  });
}

module.exports = seedDB;