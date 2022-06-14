import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem5 from '../components/AccordionList/AccordionListItem5';

function TalkToSomeoneScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
    
    <View style={styles.talktosomeone}>
          <View style={styles.talktosomeoneRow}>
            <Text style={styles.talktosomeone}>Talk To Someone</Text>
          </View>
         
        </View>
      <AccordionListItem5 title={'Do You Know Who You Can Look For?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          We all need help sometimes. Many of us serve faithfully on someone else’s support team. We are the first person on the call list because people know that they can count us to be there during their time of need. {'\n'}{'\n'}Yes, we know how to give our help and support to others, but many of us have a problem being on the receiving end of help and support. We don’t ask for help or accept help from others, even from the people that we know love and care about us. Here are some people you can turn to when you need help.{'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>{'\n'}Suportive Friends</Text>
        <Text style={{ fontSize: 18 }}>
          Usually, the most supportive friends are those that start in the casual friend category, and over time grows and deepens. A supportive friend is someone who understands who you are and what you need. Even in your worst of days, a supportive friend will be there for you.  {'\n'} {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>{'\n'}Family Members</Text>
        <Text style={{ fontSize: 18 }}>
          Families communicate about good and bad things. This allows them to celebrate together when times are good and to talk about problems when times are tough. This creates a safe place to share difficult feelings like embarrassment, confusion or shame.{'\n'} {'\n'}Talk to your family members about your problems. They would always be there for us to turn to for advice and encouragement whenever we face difficult times.{'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>{'\n'}Counsellors</Text>
        <Text style={{ fontSize: 18 }}>
          You can talk to your counsellorabout anything that is troubling you or causing you emotional/psychological distress. Just try to say whatever is on your mind and how you feel about it. Sometimes there is silence; sometimes you might find yourself saying things you had not expected to say. {'\n'}           
        </Text>
        <Text style={{ fontSize: 20 }}>{'\n'}Samaritans Of Singapore (SOS)</Text>
        <Text style={{ fontSize: 18 }}>
          Samaritans of Singapore (SOS) is dedicated to providing confidential emotional support to individuals facing a crisis, thinking about or affected by suicide. {'\n'} {'\n'}Emotional Support refers to an external coping resource provided through compassion, empathy, and genuine concern. This is the first step in helping someone out of a crisis. {'\n'}{'\n'}Crisis refers to a state of hopelessness and despair due to overwhelming life circumstances.{'\n'}{'\n'}
          You can reach out to them via:
          {'\n'}- the 24-Hour Hotline @ 1-767 for round the clock emotional support
          {'\n'}- Email Support - CareMail at pat@sos.org.sg for those who prefer to write in
          {'\n'}- Text Messaging - CareText for emotional support via their Whatsapp platform
        </Text>
        </ScrollView>
      </AccordionListItem5>
      <AccordionListItem5 title={'Want To Help Others?'}>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Below are some of the ways you can help others to pull through stressful periods. Sign up for one and make an impact!{'\n'}
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>Samaritans Of Singapore (SOS)</Text>
        <Text style={{ fontSize: 18 }}>
          Samaritans are people who believe in people, emotionally resilient, and ready to attend regularly to those in distress. You provide a listening ear in a confidential and non-judgmental manner. Applications are accepted all year round while interviews and training are conducted regularly. Sign up now!{'\n'}{'\n'}
        </Text>
        <Text style={{ fontSize: 20 }}>BuddyHelp</Text>
        <Text style={{ fontSize: 18 }}>
          BuddyHelp is the free mental health resource, that provides a safe space for people that just need someone to talk to. It is volunteer-led and remote-first. Volunteer listeners work from anywhere, via their smartphones. Sign up now!{'\n'}
          {'\n'}
          
        </Text>
        <Text style={{ fontSize: 20 }}>Singapore Association For Mental Health (SAMH)</Text>
        <Text style={{ fontSize: 18 }}>
          Volunteers play an important role in aiding our beneficiaries’ recovery journey. Whether you volunteer as an art and craft facilitator, conduct fitness exercises, perform administrative tasks, be a peer supporter, to name a few possibilities, your contribution value-adds to our ability to provide all-rounded care for our beneficiaries. Sign up and make a difference now!{'\n'}{'\n'}
          
        </Text>

        </ScrollView>
      </AccordionListItem5>
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
  talktosomeone: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 34,
  },
});
export default TalkToSomeoneScreen;