import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem1 from '../components/AccordionList/AccordionListItem1';

function FeelingLostScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.felinglost}>
          <View style={styles.feelinglostRow}>
            <Text style={styles.feelinglost}>Feeling Lost</Text>
          </View>
         
        </View>
      <AccordionListItem1 title={'What Does It Mean To Feel Lost?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          When you feel lost, you don’t know what to do, how to feel, and which
          direction to lead yourself. When feeling lost, we tend to question
          every aspect of our lives, spiraling us out of control. People who
          feel lost often take one small setback or problem and extend it to
          other areas. That’s why what starts as a minor problem grows big
          quickly.{'\n'}
          {'\n'}You might begin to lack provision, direction, and purpose. You
          may even start second-guessing yourself and the things in which you’ve
          believed. This feeling eventually trickles down to countless areas,
          such as friendships, relationships, career paths, and personal growth.{' '}
          {'\n'}
          {'\n'}One of the most dangerous aspects of feeling lost is when you no
          longer recognize who you are, which affects your self-image and
          confidence. This feeling often creates a sense of detachment since you
          no longer identify with yourself.{'\n'}
          {'\n'}However, feeling lost is also sometimes necessary since we tend
          to run away from our painful emotions, complicated relationships, past
          trauma, and other challenging events. When you feel lost, it can raise
          an alarm bell that it’s time to pay attention to the truth you’re
          running away from and make necessary changes in your life.{'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem1>
     
      <AccordionListItem1 title={'How To Cope With Feeling Lost?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Try these tips to find your purpose!{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Recognise That It's Okay!</Text>
        <Text style={{ fontSize: 18 }}>
          No matter how difficult the feeling of being lost might seem, realize
          that it’s not a feeling that will last forever. All suffering in life
          is temporary. There’s no exception. The more you try to avoid this
          feeling, the more you likely won’t be able to cope with it. {'\n'}
          {'\n'}The reality is having these periods where you are alone is good
          for you and feeling lost in life is your body telling you to spend
          some time with yourself. {'\n'}
          {'\n'}Sometimes feeling lost is the key to making necessary changes in
          your life to becoming better. You can always use this feeling to your
          advantage and reflect on your life. Everyone feels lost at some point
          in their lives, but it’s up to you how you’re going to cope with that
          feeling.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Realise You Have More Control Than You Think
        </Text>
        <Text style={{ fontSize: 18 }}>
          You have control over your emotions and thoughts – not the other way
          around. You create your current reality, and you shape your life.
          Nobody else but you is in charge of how your life turns out, which
          means you will always have the upper hand. {'\n'}
          {'\n'}Typically, when we see ourselves as feeling lost in life or
          lonely, it gives us an excuse to view everything in a negative light.
          It lends itself to putting ourselves in the victim mode when the truth
          of the matter is that you choose your attitude in every situation.{' '}
          {'\n'}
          {'\n'}If there’s something in your life you aren’t happy about, the
          realisation that you can turn your life around anytime should be
          enough to counter the feeling of being lost.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Focus On Your Strengths And Capabilities
        </Text>
        <Text style={{ fontSize: 18 }}>
          Avoid focusing on your imperfections and weaknesses. Everyone has
          flaws, and there’s absolutely nothing you can gain from obsessing
          about them. When you feel lost in life, the best thing you can do is
          focus on your best strengths. {'\n'}
          {'\n'}By shifting your perspective to the things you’re good at, you
          can gradually move forward. It’s far better to build up your strengths
          than worrying about weaknesses. Your best traits reflect the best
          parts of you. If you’re having negative thoughts, it will only bring
          you down. No matter what, your flaws are not a reflection of your
          capabilities. {'\n'}
          {'\n'}And remember, your personality isn’t permanent. Think of how
          much you’ve changed since you were a child. You can swap out negative
          traits and replace them with positive characteristics anytime.{'\n'}
          {'\n'}
        </Text>

        <Text style={{ fontSize: 20 }}>Read On Personal Development</Text>
        <Text style={{ fontSize: 18 }}>
          We often get stuck in our heads with an inner critic that makes us
          feel lost. While it’s normal to feel that way sometimes, you don’t
          want to become stuck in that mindset. {'\n'}
          {'\n'}When you read regularly, you learn new perspectives, skills, and
          solutions. The self-help genre is one of the biggest for a reason.
          Personal development books and articles can help you more than you
          realise, mainly when authors specialize in a specific topic. {'\n'}
          {'\n'}If you’re finding it difficult to cope with this feeling and not
          knowing what to do and where to go, now is the perfect time to read on
          personal development.{'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem1>
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
  feelinglost: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 34,
  },
});
export default FeelingLostScreen;