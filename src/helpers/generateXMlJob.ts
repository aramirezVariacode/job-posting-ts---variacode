import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const jobModality = [
  { id: "86ff71f2", jobtype: "remote" },
  { id: "5c05afd4", jobtype: "presential" },
  { id: "54901b0d", jobtype: "hybrid" },
];

export const generateXMlJob = (
  title: string,
  description: string,
  modality: string,
  location:string
) => {
  const date = moment().format("LLLL");
  const idReference = uuidv4();
  const requisitionId = uuidv4();
  const locationSplit = location.split(',');
  const country = locationSplit[0];
  const city = locationSplit[1];
  const modalityJob = jobModality.find((element) => element.id === modality);

  const xml = `
<?xml version="1.0" encoding="utf-8"?>
<source>
    <publisher>Variacode</publisher>
    <publisherurl>http://www.variacode.com</publisherurl>
    <job>
        <title><![CDATA[${title}]]></title>
        <date><![CDATA[${date}]]></date>
        <referencenumber><![CDATA[${idReference}]]></referencenumber>
        <requisitionid><![CDATA[${requisitionId}]]></requisitionid>
        <url>
            <![CDATA[http://www.examplesite.com/viewjob.cfm?jobid=unique123131&amp;source=Indeed]]>
        </url>
        <company><![CDATA[Variacode]]></company>
        <city><![CDATA[${city}]]></city>
        <state><![CDATA[NA]]></state>
        <country><![CDATA[${country}]]></country>
        <!--<postalcode><![CDATA[85003]]></postalcode>
        <streetaddress><![CDATA[123 fake street Phoenix AZ, 85003]]></streetaddress>-->
        <email><![CDATA[contacto@variacode.com]]></email>
        <description>
            <![CDATA[${description}]]>
        </description>
        <!--<salary><![CDATA[A convenir]]></salary>-->
        <salary><![CDATA[A convenir]]></salary>
        <!--<salary></salary>-->
        <education><![CDATA[Tecnico, Universitaria]]></education>
        <jobtype><![CDATA[fulltime]]></jobtype>
        <category><![CDATA[Category1, Category2, CategoryN]]></category>
        <experience><![CDATA[5+ years]]></experience>
        <expirationdate><![CDATA[Thu, 26 Jan 2023]]></expirationdate>
        <remotetype><![CDATA[${modalityJob?.jobtype}]]></remotetype>
        <indeed-apply-data>COVERED IN A LATER SECTION</indeed-apply-data>
    </job>
</source>
`;

  return xml;
};
