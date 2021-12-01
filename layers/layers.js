ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([711407.891754, 7024812.712091, 732407.891754, 7047347.327475]);
var wms_layers = [];

var lyr_OpenStreetMapapparenceGo2Francenaturaliste_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://osm.geo2france.fr/mapcache/",
    attributions: ' ',
                              params: {
                                "LAYERS": "naturaliste",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap - apparence Géo2France - naturaliste",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapapparenceGo2Francenaturaliste_0, 0]);
var format_PrimtreduPNRScarpeEscaut_1 = new ol.format.GeoJSON();
var features_PrimtreduPNRScarpeEscaut_1 = format_PrimtreduPNRScarpeEscaut_1.readFeatures(json_PrimtreduPNRScarpeEscaut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PrimtreduPNRScarpeEscaut_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtreduPNRScarpeEscaut_1.addFeatures(features_PrimtreduPNRScarpeEscaut_1);
var lyr_PrimtreduPNRScarpeEscaut_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimtreduPNRScarpeEscaut_1, 
                style: style_PrimtreduPNRScarpeEscaut_1,
                interactive: true,
                title: '<img src="styles/legend/PrimtreduPNRScarpeEscaut_1.png" /> Périmètre du PNR Scarpe-Escaut'
            });
var format_ZSC506proposition_2 = new ol.format.GeoJSON();
var features_ZSC506proposition_2 = format_ZSC506proposition_2.readFeatures(json_ZSC506proposition_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ZSC506proposition_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSC506proposition_2.addFeatures(features_ZSC506proposition_2);
var lyr_ZSC506proposition_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSC506proposition_2, 
                style: style_ZSC506proposition_2,
                interactive: true,
                title: '<img src="styles/legend/ZSC506proposition_2.png" /> ZSC-506 proposition'
            });
var format_ZSC507proposition_3 = new ol.format.GeoJSON();
var features_ZSC507proposition_3 = format_ZSC507proposition_3.readFeatures(json_ZSC507proposition_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ZSC507proposition_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSC507proposition_3.addFeatures(features_ZSC507proposition_3);
var lyr_ZSC507proposition_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSC507proposition_3, 
                style: style_ZSC507proposition_3,
                interactive: true,
                title: '<img src="styles/legend/ZSC507proposition_3.png" /> ZSC-507 proposition'
            });
var format_ZSC506507actuellement_4 = new ol.format.GeoJSON();
var features_ZSC506507actuellement_4 = format_ZSC506507actuellement_4.readFeatures(json_ZSC506507actuellement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ZSC506507actuellement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSC506507actuellement_4.addFeatures(features_ZSC506507actuellement_4);
var lyr_ZSC506507actuellement_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSC506507actuellement_4, 
                style: style_ZSC506507actuellement_4,
                interactive: true,
                title: '<img src="styles/legend/ZSC506507actuellement_4.png" /> ZSC 506-507 actuellement'
            });
var format_Parcelles_5 = new ol.format.GeoJSON();
var features_Parcelles_5 = format_Parcelles_5.readFeatures(json_Parcelles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Parcelles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_5.addFeatures(features_Parcelles_5);
var lyr_Parcelles_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelles_5, 
                style: style_Parcelles_5,
                interactive: true,
                title: '<img src="styles/legend/Parcelles_5.png" /> Parcelles'
            });
var group_carte_web_valeriane = new ol.layer.Group({
                                layers: [lyr_ZSC506proposition_2,lyr_ZSC507proposition_3,lyr_ZSC506507actuellement_4,lyr_Parcelles_5,],
                                title: "carte_web_valeriane"});
var group_Administratif = new ol.layer.Group({
                                layers: [lyr_OpenStreetMapapparenceGo2Francenaturaliste_0,lyr_PrimtreduPNRScarpeEscaut_1,],
                                title: "Administratif"});

lyr_OpenStreetMapapparenceGo2Francenaturaliste_0.setVisible(true);lyr_PrimtreduPNRScarpeEscaut_1.setVisible(true);lyr_ZSC506proposition_2.setVisible(true);lyr_ZSC507proposition_3.setVisible(true);lyr_ZSC506507actuellement_4.setVisible(true);lyr_Parcelles_5.setVisible(true);
var layersList = [group_Administratif,group_carte_web_valeriane];
lyr_PrimtreduPNRScarpeEscaut_1.set('fieldAliases', {'fid': 'fid', 'DATE_MAJ': 'DATE_MAJ', 'SOURCES': 'SOURCES', 'INTITULE': 'INTITULE', 'SURF_ha': 'SURF_ha', 'NB_COMM': 'NB_COMM', 'CREE_LE': 'CREE_LE', });
lyr_ZSC506proposition_2.set('fieldAliases', {'Id': 'Id', 'SITE_N2000': 'SITE_N2000', 'ENTITE': 'ENTITE', 'CODE_SITE': 'CODE_SITE', 'Surf_ha': 'Surf_ha', });
lyr_ZSC507proposition_3.set('fieldAliases', {'SITE_N2000': 'SITE_N2000', 'Surf_ha': 'Surf_ha', 'CODE_SITE': 'CODE_SITE', });
lyr_ZSC506507actuellement_4.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_Parcelles_5.set('fieldAliases', {'fid': 'fid', 'code_resea': 'code_resea', 'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'nom_site': 'nom_site', 'geo_datmaj': 'geo_datmaj', 'idpar': 'idpar', 'ogc_fid': 'ogc_fid', 'codarr': 'codarr', 'ccocom': 'ccocom', 'libcom': 'libcom', 'dnupro': 'dnupro', 'cgroup': 'cgroup', 'dnumcp': 'dnumcp', 'dnulp': 'dnulp', 'ccocif': 'ccocif', 'dnuper': 'dnuper', 'ccodro': 'ccodro', 'ccodem': 'ccodem', 'gdesip': 'gdesip', 'gtoper': 'gtoper', 'ccoqua': 'ccoqua', 'dnatpr': 'dnatpr', 'ccogrm': 'ccogrm', 'dsglpm': 'dsglpm', 'dforme': 'dforme', 'ddenom': 'ddenom', 'gtyp3': 'gtyp3', 'gtyp4': 'gtyp4', 'gtyp5': 'gtyp5', 'gtyp6': 'gtyp6', 'dlign3': 'dlign3', 'dlign4': 'dlign4', 'dlign5': 'dlign5', 'dlign6': 'dlign6', 'ccodep1a2': 'ccodep1a2', 'ccodira': 'ccodira', 'ccocom_adr': 'ccocom_adr', 'ccovoi': 'ccovoi', 'ccoriv': 'ccoriv', 'dnvoiri': 'dnvoiri', 'dinci': 'dinci', 'ccopos': 'ccopos', 'dqualp': 'dqualp', 'dnomlp': 'dnomlp', 'dprnlp': 'dprnlp', 'jdatnss': 'jdatnss', 'dldnss': 'dldnss', 'epxnee': 'epxnee', 'dnomcp': 'dnomcp', 'dprncp': 'dprncp', 'datmaj': 'datmaj', 'fid_2': 'fid_2', 'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_PrimtreduPNRScarpeEscaut_1.set('fieldImages', {'fid': 'TextEdit', 'DATE_MAJ': 'DateTime', 'SOURCES': 'TextEdit', 'INTITULE': 'TextEdit', 'SURF_ha': 'TextEdit', 'NB_COMM': 'TextEdit', 'CREE_LE': 'TextEdit', });
lyr_ZSC506proposition_2.set('fieldImages', {'Id': '', 'SITE_N2000': '', 'ENTITE': '', 'CODE_SITE': '', 'Surf_ha': '', });
lyr_ZSC507proposition_3.set('fieldImages', {'SITE_N2000': '', 'Surf_ha': '', 'CODE_SITE': '', });
lyr_ZSC506507actuellement_4.set('fieldImages', {'fid': '', 'SITECODE': '', 'SITENAME': '', });
lyr_Parcelles_5.set('fieldImages', {'fid': '', 'code_resea': '', 'id_local': '', 'id_mnhn': '', 'nom_site': '', 'geo_datmaj': '', 'idpar': '', 'ogc_fid': '', 'codarr': '', 'ccocom': '', 'libcom': '', 'dnupro': '', 'cgroup': '', 'dnumcp': '', 'dnulp': '', 'ccocif': '', 'dnuper': '', 'ccodro': '', 'ccodem': '', 'gdesip': '', 'gtoper': '', 'ccoqua': '', 'dnatpr': '', 'ccogrm': '', 'dsglpm': '', 'dforme': '', 'ddenom': '', 'gtyp3': '', 'gtyp4': '', 'gtyp5': '', 'gtyp6': '', 'dlign3': '', 'dlign4': '', 'dlign5': '', 'dlign6': '', 'ccodep1a2': '', 'ccodira': '', 'ccocom_adr': '', 'ccovoi': '', 'ccoriv': '', 'dnvoiri': '', 'dinci': '', 'ccopos': '', 'dqualp': '', 'dnomlp': '', 'dprnlp': '', 'jdatnss': '', 'dldnss': '', 'epxnee': '', 'dnomcp': '', 'dprncp': '', 'datmaj': '', 'fid_2': '', 'SITECODE': '', 'SITENAME': '', });
lyr_PrimtreduPNRScarpeEscaut_1.set('fieldLabels', {});
lyr_ZSC506proposition_2.set('fieldLabels', {});
lyr_ZSC507proposition_3.set('fieldLabels', {});
lyr_ZSC506507actuellement_4.set('fieldLabels', {});
lyr_Parcelles_5.set('fieldLabels', {});
lyr_Parcelles_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});