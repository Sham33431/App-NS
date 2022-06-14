import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem4 from '../components/AccordionList/AccordionListItem4';

function KeepingFitScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.keepfit}>
          <View style={styles.keepfitRow}>
            <Text style={styles.keepfit}>Struggling To Keep Fit</Text>
          </View>
         
        </View>
      <AccordionListItem4 title={'Do You Find Youself Struggling To Keep Fit?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Some people struggle physically with exercise, while some find their
          bodies react badly to their attempts to eat healthily. However, one of
          the major barriers to good health is not physical, but mental. {'\n'}
          {'\n'}In other words, it’s just so hard to get motivated to keep fit
          sometimes! This is common, especially when it comes to exercise. Given
          the choice between going to the gym or watching Netflix on the sofa,
          most people would probably choose the latter nine times out of ten.
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem4>
      <AccordionListItem4 title={'How To Push Yourself To Keep Fit?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Below are some of the ways you can push yourself to get off the sofa
          and start your fitness journey. Try them!{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Mix Things Up</Text>
        <Text style={{ fontSize: 18 }}>
          Anything can get boring if it’s all you do. If you go for the same run
          every morning, or do the same gym routine three times a week, you will
          quickly lose motivation. Variety is the spice of life, and this
          applies to your diet as well as your exercise. Nobody wants the same
          dull meals each week, after all.{'\n'}
          {'\n'}Mixing things up is good for a number of reasons. When it comes
          to fitness, it means you can avoid boredom, even if all you do is
          change your running route every week. However, it’s also better for
          you; if you perform the same exercise too often, your body will adapt
          to it and you won’t end up gaining much from it.{'\n'}
          {'\n'}While healthy food is often seen as dull or bland, it generally
          isn’t. However, it will be boring without variety. Get into cooking
          and see what exciting things you can make each day. Challenge yourself
          to try out a new healthy recipe every week and you’ll find your diet a
          lot easier to bear.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Keep It Short And Sharp</Text>
        <Text style={{ fontSize: 18 }}>
          A workout doesn’t have to take an hour. A well-structured 15-minute
          workout can be really effective if you really are pressed for time. As
          for regular, longer sessions, you can tell yourself you’re going to
          make time and change your schedule accordingly.
          {'\n'}
          {'\n'}Short on time? No problem. Take a 10-minute walk, three times a
          day. Swap out the evening walk for a few squats, pushups, and
          crunches, and you’ll have a total-body workout. All of these
          mini-workouts add up quick, and make a big dent in your overall
          exercise minutes for the week.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Watch And Workout</Text>
        <Text style={{ fontSize: 18 }}>
          Just can’t say “no” to your favorite Netflix show? Hop on the
          treadmill or other cardio equipment, turn on Netflix, and watch the
          time fly by. You can even make it a habit to incorporate exercising
          whenever you are watching shows.{'\n'}
          {'\n'}
        </Text>

        <Text style={{ fontSize: 20 }}>
          Stop Needing To Be In The Right Mood
        </Text>
        <Text style={{ fontSize: 18 }}>
          Everybody has been in a mood where they really don’t feel like going
          to the gym or making a salad for lunch. However, the key to success is
          ignoring this. If you only exercise or eat healthily when you’re in
          the mood to, you’ll find yourself really struggling to keep fit.{'\n'}
          {'\n'}While it’s great to be in the right mood for fitness, you need
          to get rid of the idea that it’s necessary. If you force yourself to
          do it, most of the time you’ll find you don’t regret it. {'\n'}
          {'\n'}This is especially true for exercising, as it releases
          endorphins that will make you feel much better after a workout than
          before.{'\n'}
          {'\n'}Planning is a good way to avoid this kind of mood-based
          lethargy. Decide at the beginning of each week what you’re going to
          eat, what exercise you’re going to do, and when. {'\n'}
          {'\n'}
        </Text>

        <Text style={{ fontSize: 20 }}>Find The Right Partner</Text>
        <Text style={{ fontSize: 18 }}>
          A lot of people get advice telling them to diet or exercise with
          somebody else. This can be a great idea; you could end up pushing each
          other to succeed, helping each other find recipes and exercises you’ll
          enjoy and providing moral support if you feel like giving up and going
          for a cheeseburger.{'\n'}However, you need to make sure you’re
          choosing the right person or people to help. {'\n'}
          {'\n'}Sometimes, if people give up on their diet or fitness plan they
          might try to encourage others to quit as well. This makes their
          decision feel more justified. You need to either make sure you’re with
          people who wouldn’t do that, or commit to the idea that if they drop
          out, you’ll keep going no matter what.
        </Text>
        </ScrollView>
      </AccordionListItem4>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 150,
    marginTop: -125,
    justifyContent: 'flex-start',
  },
  keepfit: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 34,
  },
});
export default KeepingFitScreen;