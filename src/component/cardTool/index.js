import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Animated } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import colors from '../../color';

export default function CardTool({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleDetails = () => {
    setIsVisible(!isVisible);
    Animated.spring(animation, {
      toValue: isVisible ? 0 : 1,
      useNativeDriver: true,
      tension: 20,
      friction: 7
    }).start();
  };

  const rotateIcon = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  async function generatePDF() {
    const now = new Date();
    const dataFormatada = now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }) + ` às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Detalhes da Peça</title>
          <style>
            body {
              font-family: 'Helvetica', sans-serif;
              color: #1F2937;
              line-height: 1.6;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
              background-color: #F9FAFB;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 3px solid #2563EB;
              padding-bottom: 20px;
            }
            .title {
              color: #2563EB;
              font-size: 28px;
              margin: 0;
              font-weight: 600;
            }
            .date {
              color: #6B7280;
              font-size: 14px;
              margin-top: 10px;
            }
            .content {
              background-color: white;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .section {
              margin-bottom: 25px;
              padding: 20px;
              background-color: #F9FAFB;
              border-radius: 8px;
              border-left: 4px solid #2563EB;
            }
            .label {
              color: #2563EB;
              font-weight: 600;
              font-size: 14px;
              text-transform: uppercase;
              margin-bottom: 8px;
              letter-spacing: 0.05em;
            }
            .value {
              font-size: 16px;
              margin: 0;
              color: #1F2937;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #6B7280;
              border-top: 1px solid #E5E7EB;
              padding-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">Detalhes da Peça</h1>
            <p class="date">Gerado em: ${dataFormatada}</p>
          </div>

          <div class="content">
            <div class="section">
              <div class="label">Código do Item</div>
              <p class="value">${data.Item}</p>
            </div>

            <div class="section">
              <div class="label">Descrição</div>
              <p class="value">${data["Item Description"]}</p>
            </div>

            <div class="section">
              <div class="label">Organização</div>
              <p class="value">${data.Org}</p>
            </div>

            <div class="section">
              <div class="label">Subinventário</div>
              <p class="value">${data.Sub}</p>
            </div>

            <div class="section">
              <div class="label">Localização</div>
              <p class="value">${data.Locator}</p>
            </div>
          </div>

          <div class="footer">
            <p>Documento gerado automaticamente pelo sistema de gerenciamento de almoxarifado</p>
            <p>ID: ${data.id}</p>
          </div>
        </body>
      </html>
    `;

    try {
      const file = await Print.printToFileAsync({
        html: htmlContent,
        base64: false,
      });

      await Sharing.shareAsync(file.uri);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      Alert.alert('Erro', 'Não foi possível gerar o PDF.');
    }
  }

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={toggleDetails}
      activeOpacity={0.9}
    >
      <View style={styles.mainContent}>
        <View style={styles.headerContent}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemCode}>{data.Item}</Text>
            <View style={styles.locationBadge}>
              <Feather name="map-pin" size={12} color={colors.primary} />
              <Text style={styles.locationText}>{data.Locator}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.shareButton}
            onPress={generatePDF}
          >
            <Feather name="share-2" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.description} numberOfLines={isVisible ? undefined : 2}>
          {data["Item Description"]}
        </Text>

        <Animated.View style={[
          styles.detailsContainer,
          {
            height: isVisible ? null : 0,
            opacity: animation,
            transform: [{ translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0]
            })}]
          }
        ]}>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>ORG</Text>
              <Text style={styles.detailValue}>{data.Org}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>SUB</Text>
              <Text style={styles.detailValue}>{data.Sub}</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[styles.expandButton, {
          transform: [{ rotate: rotateIcon }]
        }]}>
          <Feather 
            name="chevron-down" 
            size={20} 
            color={colors.primary}
          />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
