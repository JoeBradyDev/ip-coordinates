import Head from "next/head";
import { useCallback, useState } from "react";
import styles from "@/styles/Home.module.css";
import IPLocationForm from "@/components/forms/IPLocationForm";
import { IIPLocationFormData } from "@/components/forms/IPLocationForm/models";
import { ICoordinates } from "@/shared/models";
import Card from "@/components/Card";

export default function Home() {
  const [ipAddress, setIPAddress] = useState<string | undefined>();
  const [coordinates, setCoordinates] = useState<ICoordinates | undefined>();
  const [message, setMessage] = useState<string>("");

  const handleSubmit = useCallback(
    async (values: IIPLocationFormData) => {
      setIPAddress(undefined);
      setCoordinates(undefined);
      setMessage("");
      try {
        const response = await fetch(`/api/coordinates?ip=${values.ipAddress}`);
        const result = (await response.json()) as ICoordinates[];
        if (result?.[0]) {
          setIPAddress(values.ipAddress);
          setCoordinates(result[0]);
        } else {
          setMessage("Given IP address not found in database.");
        }
      } catch (e) {
        setMessage("Server error. Please try again.");
        console.log(e);
      }
    },
    [setCoordinates]
  );

  return (
    <>
      <Head>
        <title>IP Coordinates Locator</title>
        <meta name="description" content="IP Coordinates Locator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card>
          <h1 className={styles.header}>IP Coordinates Locator</h1>
          <IPLocationForm onSubmit={handleSubmit} />
          {!!message && <div className={styles.message}>{message}</div>}
          {!!ipAddress && !!coordinates?.latitude && !!coordinates?.longitude && (
            <div className={styles.result}>
              <ul>
                <li>
                  <span>IP Address: </span> {ipAddress}
                </li>
                <li>
                  <span>Latitude: </span> {coordinates.latitude}
                </li>
                <li>
                  <span>Longitude: </span> {coordinates.longitude}
                </li>
              </ul>
            </div>
          )}
        </Card>
      </main>
    </>
  );
}
