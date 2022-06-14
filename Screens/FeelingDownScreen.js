import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem3 from '../components/AccordionList/AccordionListItem3';

function FeelingDownScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.feelingdown}>
          <View style={styles.feelingdownRow}>
            <Text style={styles.feelingdown}>Feeling Down</Text>
          </View>
         
        </View>
      <AccordionListItem3 title={'What Does It Mean To Feel Down?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Everyone experiences bad days. But any time you’re feeling down, you
          have two options. You can keep doing what you’re doing, which means
          continuing to feel less than ideal. Or, you can make a change and try
          to pick yourself back up.{'\n'}
          {'\n'}Sadness is a temporary state that often has a clear cause, like
          a big disappointment, the loss of someone close to you, or bad news
          from someone you love.{'\n'}
          {'\n'}This type of sadness can fluctuate throughout the day. In
          certain moments, the emotional burden might feel particularly heavy.
          You might cry often, feel numb or drained, and struggle to
          concentrate.{'\n'}At other times — when you get lost in something you
          enjoy or when a loved one distracts you — your sorrow may seem light
          enough that you can barely feel its weight. {'\n'}
          {'\n'}While it might linger in some form for days or weeks, it
          generally begins to ease naturally. If you’re feeling down, you’re
          likely suffering from a lack of motivation, sadness, or stress, which
          can all cause you to want to stay exactly where you are.{'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem3>
      
      <AccordionListItem3 title={'Coping With Sadness'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Try these tips to feel better!{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Stop Being So Hard On Yourself</Text>
        <Text style={{ fontSize: 18 }}>
          We put a lot of pressure on ourselves. While it’s beneficial to aspire
          to greatness, sometimes you need to sit back, reflect, and recognize
          all the good things you have going on right now.{'\n'}
          {'\n'}This might seem hard, but sometimes the only thing we might need
          is to put a little distance between ourselves and the issue at hand.
          Sometimes this can give us a whole new perspective on the problem.
          {'\n'}
          {'\n'}When you’re feeling down, try this: think about the things in
          life you’re grateful for. Focus on what you have, not what you don’t.
          Stop putting so much pressure on yourself to constantly achieve, and
          be content with who you are right now at this moment. And remember,
          happiness is a choice. {'\n'}
          {'\n'}Also, stop feeling guilty for resting. Do you feel like you need
          someone to drag you just so you can take a tiny step forward? Try
          taking a short 20-minute nap before doing your next chore. Believe it
          or not, you will feel so recharged and energetic that you’ll find it
          hard to believe that you had only dozed off for 20 minutes.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Get Up And Move</Text>
        <Text style={{ fontSize: 18 }}>
          One of the best ways to pick yourself up when you’re having a tough
          day is to get up and do some exercise. Many geniuses have had their
          most important breakthroughs while taking long walks. {'\n'}
          {'\n'}Walking helps you get off your back, get some exercise while
          soaking in different scenes along the way. There are several
          attestations to the therapeutic effects of walking. Whatever you do,
          get up, get moving, and get over it.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Surround Yourself With People You Love
        </Text>
        <Text style={{ fontSize: 18 }}>
          Family members and friends can be the best medicine when you are
          feeling depressed or stressed from time to time. This makes this tip
          one of the best ways to improve your mood. Even if you can’t see them
          in person, pick up the phone and call someone you love. Sometimes all
          you need is a friend to listen to you and offer some positive
          thoughts. Many studies have pointed out the importance of social
          support on overall well-being. {'\n'}
          {'\n'}Tough days are inevitable, but having people to go to at those
          times makes a world of difference and can help you turn things around.
          If you’ve been suffering from depression or excessive stress for a
          long time, support groups can also be a great way to find connection.
          {'\n'}
          {'\n'}When you are feeling the blues, it almost always helps to talk
          to someone – even if it is not about what’s eating you at the moment.
          Just getting out there and being with someone – talking, laughing and
          being in a different environment can do a great deal to alleviate the
          pain.{'\n'}
          {'\n'}
        </Text>

        <Text style={{ fontSize: 20 }}>Take Deep Breaths</Text>
        <Text style={{ fontSize: 18 }}>
          Focusing on your breathing may not sound like much, but it can make a
          world of difference if you’re feeling down. When you breathe deeply,
          your brain sends a message to your body to calm down, which decreases
          your body’s overall stress response. Spend a few minutes focusing on
          nothing except your breath. Take long, slow breaths, and get rid of
          all negative thoughts on each exhale.{'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem3>
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
  feelingdown: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 34,
  },
});
export default FeelingDownScreen;