import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem from '../components/AccordionList/AccordionListItem';

function FeelingMuscleSorenessScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.musclesoreness}>
          <View style={styles.musclesorenessRow}>
            <Text style={styles.musclesoreness}>Muscle Soreness</Text>
          </View>
         
        </View>
        <AccordionListItem title={'What is DOMS?'}>
          <Text style={{ fontSize: 18 }}>
            Delayed-onset muscle soreness (DOMS) is muscle pain that begins after
            you’ve worked out. It normally starts a day or two after a workout.
            You won’t feel DOMS during a workout.{'\n'} {'\n'}DOMS symptoms
            typically occur up at least 12 to 24 hours after a workout. The pain
            tends to peak about one to three days after your workout, and then
            should ease up after that.
          </Text>
        </AccordionListItem>

          <AccordionListItem title={'Symptoms of DOMS'}>
          <ScrollView>
            <Text style={{ fontSize: 18 }}>
              Symptoms of DOMS to watch out for may include:{'\n'}
              {'\n'}- muscles that feel tender to the touch{'\n'}- reduced range
              of motion due to pain and stiffness when moving{'\n'}- swelling in
              the affected muscles{'\n'}- muscle fatigue{'\n'}- short-term loss of
              muscle strength{'\n'}
              {'\n'}Some people think that unless you feel super sore after every
              workout, you’re not making any fitness gains. But is this true? No.
              When you start a new exercise routine or push your limits, you’re
              more likely to get sore. But as you keep working out, your body
              adapts.
              {'\n'}
              {'\n'}You may feel less and less sore with each workout, but that in
              no way means you’re not working out hard enough or that you’re
              missing out on fitness gains from those workouts.{'\n'}
            </Text>
            </ScrollView>
          </AccordionListItem>
        

        
          <AccordionListItem title={'Treating DOMS'}>
          <ScrollView>
            <Text style={{ fontSize: 18 }}>
              Time is the only treatment for DOMS, but you can also take steps to
              ease the pain and stiffness while you wait for your muscles to
              repair themselves.{'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Massage</Text>
            <Text style={{ fontSize: 18 }}>
              A study found that people who received a massage 24, 48, or 72 hours
              after an intense workout reported significantly less soreness than
              people who didn’t get a post-workout massage. Getting a massage 48
              hours after workout seemed to work best. Using a foam roller right
              after a workout may also help head off a bad case of DOM.{'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Cold Bath</Text>
            <Text style={{ fontSize: 18 }}>
              A 2016 study found that a 10- to 15-minute full-body immersion in a
              cold water bath (10–15°C) lessened the degree of DOMS.{'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Warm Bath</Text>
            <Text style={{ fontSize: 18 }}>
              Does an ice bath sound extreme? Try a soak in a warm tub, instead.
              Moist heat wraps or a warm bath may alsoTrusted Source ease the pain
              and stiffness that come with DOMS.
              {'\n'}
            </Text>
            </ScrollView>
          </AccordionListItem>

        <AccordionListItem title={'Can You Prevent DOMS?'}>
    
          <ScrollView>
            <Text style={{ fontSize: 18 }}>
              You may not be able to avoid DOMS all together, but you can take
              steps to lessen its intensity. Try these tips:{'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Stay Hydrated</Text>
            <Text style={{ fontSize: 18 }}>
              One study found that men who exercised in hot, humid temperatures
              had a big dip in muscle soreness when they drank water before,
              during, and after exercise, compared to men who didn’t hydrate.
              {'\n'}
              {'\n'}
            </Text>
            <Text style={{ cfontSize: 20 }}>Warm Up</Text>
            <Text style={{ fontSize: 18 }}>
              Spend 5 to 10 minutes before each workout doing some dynamic
              stretching. Skip the static stretching until after your workout.
              {'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Cool Down</Text>
            <Text style={{ fontSize: 18 }}>
              In a 2012 study, a 20-minute cool down of low-intensity cycling
              after a lower-body strength training session led to decreased
              soreness in the quadriceps muscle two days later. Always end your
              cool down with some static stretching. It won’t lessen DOMS, but it
              can boost flexibility in your joints and muscles.{'\n'}
              {'\n'}
            </Text>
            <Text style={{ fontSize: 20 }}>Take It Slowly</Text>
            <Text style={{ fontSize: 18 }}>
              Take your workouts to the next level of intensity one small step at
              a time. That can help you safely build your strength and endurance
              while you minimize the effects of DOMS
            </Text>
          </ScrollView>
        </AccordionListItem>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    paddingTop: 10,
    justifyContent: 'flex-start',
    height: ''
  },
  musclesoreness: {
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 57,
    width: 350,
    fontSize: 35,
  },
  musclesorenessRow: {
    marginTop:10,
  },
});
export default FeelingMuscleSorenessScreen;