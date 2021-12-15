import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ufscar_logo from './assets/ufscar_logo.png';
import eu from './assets/eu.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carteirinha online UFSCar</Text>
      </View>

      <View style={styles.containerLogo}>
        <Image 
          style={styles.logo}
          source={ufscar_logo}
        />
        <Image 
          style={styles.eu}
          source={eu}
        />
      </View>

      <Text style={styles.titleStudentData}>Dados do Aluno</Text>

      <View style={styles.studentData}>
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Nome: </Text>
          <Text style={styles.studentText}>Matheus Goulart Ranzani</Text>  
        </View>
        <View style={styles.containerData}>
          <Text style={styles.dataText}>RA: </Text>
          <Text style={styles.studentText}>800278</Text>  
        </View>
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Curso: </Text>
          <Text style={styles.studentText}>Ciência da Computação</Text>  
        </View>
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Ano de Ingresso: </Text>
          <Text style={styles.studentText}>2021</Text>  
        </View>
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Validade: </Text>
          <Text style={styles.studentText}>2022</Text>  
        </View>
        
        <Text style={styles.codeTitle}>Código de Acesso: </Text>
        <Text style={styles.codeText}>2YHGB-JGR7M-T2WPM-UMFA8-X0HU5</Text>  
        <Text style={styles.codeInfo}>Para comprovar a autenticidade deste documento, verifique o código de acesso no seguinte endereço: https://siga.ufscar.br/doc</Text>
      </View>

      <StatusBar
        style='light'
        translucent={false}
        backgroundColor='#393a3d'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393a3d',
    height: 60
  },

  headerText: {
    fontSize: 18,
    color: '#fff',
  }, 

  containerLogo: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 15
  },

  eu: {
    flex: 1,
    height: '100%',
    resizeMode: 'contain',
  },
  
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },

  titleStudentData: {
    alignSelf: 'center',
    marginVertical: 22,
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  studentData: {
    marginHorizontal: 15,
  },
  
  containerData: {
    flexDirection: 'row',
  },
  
  dataText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  
  studentText: {
    fontSize: 16
  },

  codeTitle: {
    marginTop: 22,
    marginBottom: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22
  },
  
  codeText: {
    fontSize: 16
  },

  codeInfo: {
    fontSize: 14,
    marginTop: 32,
    color: '#a1a1a1',
    fontStyle: 'italic',
  }
});