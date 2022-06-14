import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem2 from '../components/AccordionList/AccordionListItem2';

function FeelingOverwhelmedScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.feelingoverwhelmed}>
          <View style={styles.feelingoverwhelmedRow}>
            <Text style={styles.feelingoverwhelmed}>Feeling Overwhelmed</Text>
          </View>
         
        </View>
      <AccordionListItem2 title={'What Does It Mean To Feel Overwhelmed?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          You know when you&#39;re swamped, and you can&#39;t get things done,
          and you don&#39;t know what to do? When you experience emotional
          overwhelm, it can feel all-consuming. Many people will end up feeling
          overwhelmed at some point in their lives. {'\n'}
          {'\n'}It entails more than being stressed - being completely overcome
          by an unruly and intense emotion that something is too challenging to
          manage and overcome.{'\n'}
          {'\n'}By definition being emotionally overwhelmed means to be
          completely submerged by your thoughts and emotions about all of life’s
          current problems, to the point where you lack productivity and feel
          frozen or paralysed.{'\n'}
          {'\n'}Compare the feeling of being overwhelmed to being submerged
          after a rough wave. It’s a scary experience, you may not know which
          way is up or what way to swim, you may feel stunned and unable to
          react. You may be unable to think or act rationally or functionally
          and emotional overwhelm may impact your relationships or professional
          life.{'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem2>
      <AccordionListItem2 title={'What Causes Emotional Overwhelm?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          When a person believes the stressors are far too great to manage, they
          become overwhelmed — which means that any number of causes are
          possible. {'\n'}
          {'\n'}Whether brought on by exceptionally stressful time at work, a
          traumatic personal experience like losing a loved one, or another
          inciting factor, emotional overwhelm can occur for a short burst of
          time or over a much longer period.{'\n'}
          {'\n'}Sometimes, a series of hardships and challenges occurring in
          rapid succession can trigger someone to feel overcome by unwieldy
          emotions.{'\n'}
          {'\n'}Common experiences that can lead to emotional overwhelm can
          include:{'\n'}- Relationship issues{'\n'}- Physical or mental health
          illness{'\n'}- A demanding job{'\n'}- Lack of nutrition{'\n'}-
          Financial distress and insecurity{'\n'}- Significant life changes
          {'\n'}- Time constraints{'\n'}- Death of a loved one{'\n'}- Personal
          traumas such as abuse{'\n'}- Habitual lack of sleep{'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem2>
      <AccordionListItem2 title={'Symptoms Of Feeling Overwhelmed'}>
      <ScrollView>
        <Text style={{ fontSize: 18}}>
          When a person is experiencing an overwhelming feeling, it can take
          shape in a variety of ways. In each instance, a person is generally
          more likely to be overwhelmed by negative emotions — anger, fear,
          anxiety, or guilt — and it is often difficult to understand and
          verbalise the exact source of the stress. {'\n'}
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem2>
      <AccordionListItem2 title={'Coping With The Feeling Of Overwhelm?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Often, overwhelm is as uncomfortable as it is uncontrollable. It rears
          its head as anxiety, anger, or significant irritability and worry.
          Doubt and helplessness also make their way into a person’s normal
          thought process. Physically, it can manifest when a person lashes out
          verbally, cries, or has a panic attack. These negative feelings are
          often paired with a quickened heartbeat, perspiration, shortness of
          breath, or even chest pain.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Take An Emotional Time Out</Text>
        <Text style={{ fontSize: 18 }}>
          Read an engrossing book that has nothing to do with work. Go to a
          movie if you can swing it. The point is to take an hour or two away
          from your problems--physically somewhere else, if possible. You&#39;ll
          remember that there&#39;s a vast world out there, and maybe put
          yourself back in perspective.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Breathe Deeply</Text>
        <Text style={{ fontSize: 18 }}>
          Just take a full 120 seconds to breathe in and out, very deeply--maybe
          six or seven breaths per minute. There are plenty of grounding
          techniques you can use when feeling overwhelmed that involve deep
          breathing exercises. When you consciously try deep breathing, it
          triggers your body’s relaxation response and can come in handy during
          particularly stressful situations.{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Have A Healthy Lifestyle</Text>
        <Text style={{ fontSize: 18 }}>
          Making healthy lifestyle choices can improve your mental health. This
          can include things like eating plenty of fruits and vegetables,
          sleeping well, and exercising a few times a week. Whatever you do for
          exercise, work it into the middle of the day, so you can separate the
          difficult morning from the rest of the afternoon.{'\n'}
          {'\n'}Additionally, practicing yoga, meditation, and progressive
          muscle relaxation can help calm your body’s response to anxiety, as
          each exercise helps you to focus your breath.{'\n'}
          {'\n'}
        </Text>

        <Text style={{ fontSize: 20 }}>Be In The Moment</Text>
        <Text style={{ fontSize: 18 }}>
          If your thinking is focused on what the future holds — whether in a
          few minutes or several years down the road — it may make you more
          susceptible to becoming overwhelmed. Think about one moment, task, and
          experience at a time, in the present moment, to help remove the
          possibility of uncontrollable thoughts that may or may not come about.
          {'\n'}
        </Text>
        </ScrollView>
      </AccordionListItem2>
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
  feelingoverwhelmed: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 34,
  },
});
export default FeelingOverwhelmedScreen;