ol.proj.proj4.register(proj4);
ol.proj.get("IGNF:LAMB93").setExtent([-147013.188387, 5997468.790446, 1718882.623061, 7223817.274295]);
var wms_layers = [];

var format_Region1_0 = new ol.format.GeoJSON();
var features_Region1_0 = format_Region1_0.readFeatures(json_Region1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Region1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region1_0.addFeatures(features_Region1_0);
var lyr_Region1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region1_0, 
                style: style_Region1_0,
                interactive: false,
                title: '<img src="styles/legend/Region1_0.png" /> Region1'
            });
var format_Regions2_1 = new ol.format.GeoJSON();
var features_Regions2_1 = format_Regions2_1.readFeatures(json_Regions2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Regions2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions2_1.addFeatures(features_Regions2_1);
var lyr_Regions2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regions2_1, 
                style: style_Regions2_1,
                interactive: false,
                title: '<img src="styles/legend/Regions2_1.png" /> Regions2'
            });

lyr_Region1_0.setVisible(true);lyr_Regions2_1.setVisible(true);
var layersList = [lyr_Region1_0,lyr_Regions2_1];
lyr_Region1_0.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'CHF_REG': 'CHF_REG', 'NOM_REG_M': 'NOM_REG_M', 'NOM_REG': 'NOM_REG', });
lyr_Regions2_1.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'CHF_REG': 'CHF_REG', 'NOM_REG_M': 'NOM_REG_M', 'NOM_REG': 'NOM_REG', });
lyr_Region1_0.set('fieldImages', {'ID': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CHF_REG': 'TextEdit', 'NOM_REG_M': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Regions2_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CHF_REG': 'TextEdit', 'NOM_REG_M': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Region1_0.set('fieldLabels', {'ID': 'no label', 'INSEE_REG': 'no label', 'CHF_REG': 'no label', 'NOM_REG_M': 'no label', 'NOM_REG': 'no label', });
lyr_Regions2_1.set('fieldLabels', {'ID': 'no label', 'INSEE_REG': 'no label', 'CHF_REG': 'no label', 'NOM_REG_M': 'no label', 'NOM_REG': 'no label', });
lyr_Regions2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});