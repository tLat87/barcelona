import {Image, ScrollView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import ArowRightSvg from '../assets/svg/ArowRightSvg';

const mainPlaces = [
    {
        title: 'Casino Barcelona',
        desc: 'A well-known casino with a wide selection of games, including poker and roulette. Panoramic views of the port and city.',
        img: require('../assets/img/2cbf7e866da08986673f3b4ea956a4bfe0a15214.png'),
        loc: '41.38678040432311, 2.197034657470808',
        longDesc: 'Here, elegance meets excitement! Casino Barcelona offers a wide selection of games, including poker, roulette, and blackjack, along with live tournaments for competitive players. Enjoy a panoramic view of the port, exquisite dishes at Ají restaurant, and vibrant nightlife at the bar. This is the place where style and thrill come together.',
    },
    {
        title: 'Bingo Laietana',
        desc: 'Bingo Laietana offers a classic bingo experience in central Barcelona, known for its lively atmosphere and friendly crowd—perfect for a fun night out.',
        img: require('../assets/img/3a6c287f1830379e17fc5ef45b4579b569d4e2f4.jpg'),
        loc: '41.38721511522792, 2.1741673475054357',
        longDesc: 'Bingo Laietana is a cozy spot in the heart of Barcelona, known for its friendly atmosphere. Here, you can enjoy comfort, meet new people, and feel the energy of the city in a warm setting.',
    },
    {
        title: 'Casino Peralada',
        desc: 'An elite casino with a focus on high stakes and private events. Known for its luxurious halls and exclusive service.',
        img: require('../assets/img/4e93303cb875625f7870b0fb6953b7fff3a50384.jpg'),
        loc: '42.30807700313811, 3.011150841818508',
        longDesc: 'This isn’t just a casino—it’s a masterpiece of architecture. Casino Peralada is housed in a 14th-century castle, surrounded by vineyards and gardens. It offers an atmosphere of elite leisure, with private rooms and exclusive events. The complex also features a high-class restaurant with wine tastings.',
    },
    {
        title: 'Casino Tarragona',
        desc: 'Although located in a neighboring city, this casino attracts many visitors from Barcelona thanks to its excellent service and diverse game offerings',
        img: require('../assets/img/9b257cedc0650f0dbcf9d5c7fc0aa60a1a0e0467.jpg'),
        loc: '41.11527437134093, 1.2568485966800265',
        longDesc: 'Casino Tarragona attracts visitors with its cozy atmosphere and variety of entertainment. Here, you can enjoy  also a unique lounge area, bars, and a restaurant with views of the historic city center. Thanks to its proximity to the sea, the vibe is always laid-back and resort-like.',
    }
]

const secondaryPlaces = [
    {
        title: 'Port Vell',
        img: require('../assets/img/9debf7ef63af56f7fe9656cb56f26ed1f446366d.jpg'),
        loc: 'Port Vell, 08039 Barcelona',
        longDesc: 'Port Vell, Barcelona’s iconic harbor, offers a beautiful blend of maritime charm and urban elegance. Situated in the heart of the city, it is one of the oldest harbors in the Mediterranean and has been transformed into a vibrant hub for both locals and tourists. Whether you’re strolling along the waterfront, enjoying a meal at one of the many seaside restaurants, or browsing the boutique shops, Port Vell is the perfect spot for a leisurely day out.\n' +
            '\n' +
            'This picturesque area is home to several attractions, including the famous Maremagnum shopping center and the Barcelona Aquarium, making it an ideal place for families, couples, and solo travelers. For those interested in maritime history, a visit to the old shipyard and the nautical museum is a must. With its impressive yachts, scenic views, and easy access to other parts of the city, Port Vell stands as a testament to Barcelona’s coastal beauty and its dynamic cultural scene.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA stroll along the marina with beautiful views of the Mediterranean.\n' +
            '\t•\tBoutique shops and dining with waterfront views.\n' +
            '\t•\tFamily-friendly attractions like the aquarium and museums.',
    },
    {
        title: 'MACBA',
        img: require('../assets/img/024e9a9f5e7207c9477b20231275e01f8fae454c.jpg'),
        loc: 'Plaça dels Àngels, 1, 08001 Barcelona',
        longDesc: 'Located in the El Raval neighborhood, the Museum of Contemporary Art (MACBA) is a cultural gem that invites visitors to dive into the world of modern art. Founded in 1995, MACBA is one of the leading art institutions in Spain, showcasing an impressive collection of contemporary works from both international and local artists. Its minimalist white building designed by Richard Meier contrasts with the surrounding historic buildings, creating a striking visual experience.\n' +
            '\n' +
            'The museum’s exhibits rotate frequently, offering a dynamic range of visual arts, photography, sculpture, and installation pieces that challenge and inspire visitors. Whether you’re a fan of abstract art or cutting-edge installations, MACBA provides an immersive experience that encourages deeper thought and appreciation of the ever-evolving landscape of contemporary creativity.\n' +
            '\n' +
            'Apart from the exhibits, MACBA also hosts a variety of cultural events, workshops, and talks, making it a cultural hotspot for those seeking to connect with the city’s artistic pulse. Don’t forget to explore the surrounding area, as El Raval is home to other great cultural spots and vibrant street life.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA wide variety of contemporary art exhibitions.\n' +
            '\t•\tEngaging cultural events and educational programs.\n' +
            '\t•\tLocated in El Raval, a district full of artistic energy.',
    },
    {
        title: 'Barceloneta Beach',
        img: require('../assets/img/43c08847d01503353e072e322068fe599d0e78c9.jpg'),
        loc: 'Barceloneta Beach, 08003 Barcelona',
        longDesc: 'Barceloneta Beach is one of the most popular and beloved spots in Barcelona, offering the perfect mix of relaxation, sun, and stunning Mediterranean views. Located near the historic Barceloneta neighborhood, this beach has become a go-to destination for both locals and tourists looking to unwind by the sea. Whether you’re sunbathing on the golden sands, taking a dip in the crystal-clear waters, or enjoying a refreshing drink at one of the beachfront bars, Barceloneta Beach offers a welcoming escape from the hustle and bustle of the city.\n' +
            '\n' +
            'The beach is easily accessible and well-equipped, with showers, beach volleyball courts, and plenty of restaurants and cafes where you can enjoy fresh seafood and tapas. The promenade is ideal for a leisurely walk, jog, or bike ride, offering a unique way to experience Barcelona’s coastline.\n' +
            '\n' +
            'Barceloneta Beach is not just a place to relax but also a vibrant area full of life, with street performers, lively beachgoers, and a mix of locals and tourists creating a unique atmosphere. As the sun sets, the beach comes alive with a different energy, making it a great spot to watch the sunset or enjoy a drink by the water.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tIdeal for swimming, sunbathing, and people-watching.\n' +
            '\t•\tA wide range of beachfront bars and seafood restaurants.\n' +
            '\t•\tStunning views of the Mediterranean and a lively, vibrant atmosphere.',
    },
    {
        title: 'Montjuïc',
        img: require('../assets/img/55fbdb1472171477f04d2dd46665c908d90f489e.jpg'),
        loc: ' Montjuïc Hill, 08038 Barcelona',
        longDesc: 'Montjuïc is one of Barcelona’s most iconic hills, offering not only stunning panoramic views of the city but also a rich cultural experience. Perched above the city, Montjuïc is home to numerous attractions, including the National Art Museum of Catalonia (MNAC), the Olympic Stadium, and the historic Montjuïc Castle. The hill’s blend of historical landmarks, lush gardens, and cultural venues makes it a must-visit for anyone exploring Barcelona.\n' +
            '\n' +
            'The Montjuïc Castle, which dates back to the 17th century, offers both a glimpse into the city’s past and a vantage point over the coastline. Nearby, the National Art Museum of Catalonia houses an impressive collection of Romanesque, Gothic, and Modernist art. For sports enthusiasts, the Olympic Stadium, built for the 1992 Summer Olympics, is a fascinating landmark, and visitors can explore the surrounding area, which includes the Olympic Village and the iconic Palau Sant Jordi.\n' +
            '\n' +
            'Don’t miss the beautiful gardens on Montjuïc, such as the Jardins de Joan Miró and the Jardins de Laribal, which provide peaceful spots for relaxation and stunning views.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tAmazing views of Barcelona and the Mediterranean.\n' +
            '\t•\tRich cultural heritage, including museums and the Olympic Stadium.\n' +
            '\t•\tBeautiful gardens and historic landmarks.',
    },
    {
        title: 'Magic Fountain',
        img: require('../assets/img/57a826919ecda61a18a114324d5610f0678ecc94.jpg'),
        loc: 'Plaça de Carles Buïgas, 08038 Barcelona',
        longDesc: 'The Magic Fountain of Montjuïc is one of Barcelona’s most enchanting sights, offering a mesmerizing display of water, light, and music. Located at the foot of Montjuïc hill, the fountain hosts nightly shows that captivate visitors with vibrant colors and stunning choreography. The Magic Fountain was originally built in 1929 for the International Exposition and has since become a symbol of the city’s creativity and cultural richness.\n' +
            '\n' +
            'As the sun sets, the fountain transforms into a grand spectacle, with water jets synchronized to music and illuminated by a vibrant light display. It’s a must-see experience for anyone visiting the city, whether you’re with family, friends, or on your own. The show is free to attend, and the atmosphere is both festive and romantic, making it a perfect spot for an evening outing.\n' +
            '\n' +
            'Nearby, the Palau Nacional, which houses the National Art Museum of Catalonia, provides a grand backdrop for the fountain, adding to the overall grandeur of the scene.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA stunning nightly water, light, and music show.\n' +
            '\t•\tFree admission, making it an accessible experience.\n' +
            '\t•\tSituated near the Palau Nacional and Montjuïc Hill.',
    },
    {
        title: 'Ciutadella Park',
        img: require('../assets/img/655c41df89d43be781691bb20952e76fedffab99.jpg'),
        loc: 'Passeig de Picasso, 21, 08003 Barcelona',
        longDesc: 'Ciutadella Park is Barcelona’s central green space, offering a peaceful retreat from the bustling city life. Located in the heart of the city, the park is a favorite among locals and tourists alike, featuring a lake, a zoo, and several museums. Whether you’re looking to relax by the water, explore the park’s many attractions, or enjoy a picnic in the sun, Ciutadella Park is a place where nature and culture come together.\n' +
            '\n' +
            'The park is home to the Barcelona Zoo, one of the city’s top family-friendly attractions, where visitors can see a variety of animals in a lush, green setting. The park also houses the Catalan Parliament building and the Museu de Zoologia, offering a mix of history, nature, and science. The large ornamental fountain designed by Josep Fontserè and Antoni Gaudí is another highlight of the park, providing a stunning visual centerpiece.\n' +
            '\n' +
            'Ciutadella Park is also a great place for sports and recreation, with plenty of space for jogging, cycling, or enjoying a leisurely walk. It’s a hub of activity, with street performers and locals enjoying the outdoors all year round.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA beautiful green space with a lake and gardens.\n' +
            '\t•\tAttractions like the Barcelona Zoo and museums.\n' +
            '\t•\tPerfect for outdoor activities, picnics, and relaxation.',
    },
    {
        title: 'Roman Amphitheater',
        img: require('../assets/img/3816d2e218f402ce61c0c5692b174e629eef4ae9.jpg'),
        loc: 'Placa del Forum, s/n, 43003 Tarragona',
        longDesc: 'The Roman Amphitheater in Tarragona is one of the city’s most iconic historical landmarks, offering a fascinating glimpse into its Roman past. Built in the 2nd century AD, this amphitheater once hosted gladiatorial games and public spectacles. Located just steps from the Mediterranean Sea, the site is an awe-inspiring blend of history, architecture, and natural beauty.\n' +
            '\n' +
            'Today, visitors can walk through the ancient ruins, marveling at the impressive structure and imagining the lively events that took place here centuries ago. The amphitheater’s location by the sea adds a unique charm, providing stunning views of the coastline. It’s an essential stop for anyone wanting to learn more about Tarragona’s ancient Roman heritage.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA well-preserved Roman amphitheater.\n' +
            '\t•\tPanoramic views of the Mediterranean.\n' +
            '\t•\tA glimpse into the city’s ancient Roman history.',
    },
    {
        title: 'Tarragona Cathedral',
        img: require('../assets/img/08331ffa7a6597923920e1bad610fa3737ac3fd4.jpg'),
    loc: 'Pla de la Seu, s/n, 43003 Tarragona',
    longDesc: 'Tarragona Cathedral is a magnificent example of Gothic architecture, known for its intricate design and rich historical significance. Located in the heart of the city, this cathedral was built between the 12th and 14th centuries and showcases a stunning combination of Romanesque and Gothic styles. Visitors can admire its impressive façade, ornate interiors, and the stunning cloister that offers a peaceful retreat.\n' +
        '\n' +
        'The cathedral is not just an architectural marvel but also a cultural treasure, housing important artworks and relics that tell the story of the region’s religious and historical legacy. The peaceful atmosphere within makes it a perfect spot for contemplation, while the views from the bell tower offer a panoramic vista of Tarragona.\n' +
        '\n' +
        'Highlights:\n' +
        '\t•\tA stunning Gothic cathedral with Romanesque elements.\n' +
        '\t•\tIntricate artwork and religious relics.\n' +
        '\t•\tPanoramic views from the bell tower.',
    },
    {
        title: 'L’Angels Beach',
        img: require('../assets/img/14515ea3720bbcefbb8996861b28172da59fedb8.jpg'),
        loc: 'Platja dels Àngels, 43003 Tarragona',
        longDesc: 'L’Angels Beach is a pristine and serene stretch of coastline located just outside Tarragona, making it a perfect spot for those seeking tranquility by the sea. With its clean golden sand and crystal-clear waters, it offers a peaceful atmosphere, ideal for unwinding or enjoying a relaxing day under the sun. The beach is less crowded compared to other popular spots, giving visitors a more intimate and calm experience.\n' +
            '\n' +
            'Whether you’re looking to swim, sunbathe, or take a leisurely walk along the shore, L’Angels Beach offers a peaceful environment surrounded by natural beauty. It’s a hidden gem for those who want to escape the hustle and bustle of the city and enjoy the Mediterranean coast in a serene setting.\n' +
            '\n' +
            'Highlights:\n' +
            '\t•\tA peaceful and less crowded beach.\n' +
            '\t•\tIdeal for relaxation, swimming, and sunbathing.\n' +
            '\t•\tSurrounded by natural beauty and tranquility.',
    },
]

const HomeScreen = ({ navigation }) => {

    return (
      <ScrollView
        style={{
          backgroundColor: '#000',
          flex: 1,
          paddingHorizontal: 16,
        }}>
        <Text style={{color: '#fff', fontSize: 28, fontWeight: 'bold'}}>
          Best-known places
        </Text>

        <ScrollView horizontal style={{flexDirection: 'row', marginTop: 20}}>
          {mainPlaces.map((place, index) => (
            <View
              style={{
                backgroundColor: '#fff',
                width: 300,
                marginRight: 20,
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                borderRadius: 8,
              }}>
              <Image
                source={place.img}
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />

              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginBottom: 18,
                }}>
                {place.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                    width: '80%',
                  }}>
                  {place.desc}
                </Text>
                  <TouchableOpacity
                      style={{
                          padding: 8,
                          backgroundColor: '#C40D1A',
                          alignSelf: 'center',
                          borderRadius: 5,
                          marginLeft: 10,
                      }}
                      onPress={() => navigation.navigate('Map', {loc: place.loc})}
                  >
                      <ArowRightSvg />
                  </TouchableOpacity>

              </View>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#C40D1A',
            marginTop: 20,
          }}
        />

        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: '100%',
            alignSelf: 'flex-start',
          }}>
            {secondaryPlaces.map((place, index) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailedBestPlaces',  {place})}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 12,
                        width: 150,
                        marginRight: 20,
                    }}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#000',
                            padding: 10,
                            textAlign: 'center',
                        }}>
                        {place.title}
                    </Text>
                    <Image
                        source={
                            place.img
                        }
                        style={{
                            width: '100%',
                            height: 160,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                        }}
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>

        <View style={{height: 100}} />
      </ScrollView>
    );
}

export default HomeScreen;
