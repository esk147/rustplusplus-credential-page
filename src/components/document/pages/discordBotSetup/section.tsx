import Image from 'next/image';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import OrderedList from '../../orderedList/orderedList';
import Paragraph from '../../paragraph/paragraph';
import styles from '../common.module.css';
import * as data from '@/data/documents/discordBotSetup/orderedItems';
import { ImageUrl } from '@/types/imageUrlTypes';

const DiscordBotSetupSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>Discord Bot Setup Documentation</Heading>
      <Heading2>Create a Discord Bot</Heading2>
      <OrderedList items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        width={383}
        height={173}
        src={imageUrls.NewApplicationBotSetup}
        alt="new_application_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={3} items={data.getBotCreationStep()} />
      <Image
        className={styles.documentimg}
        width={465}
        height={396}
        src={imageUrls.CreateAnApplicationBotSetup}
        alt="create_an_application_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={4} items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        width={628}
        height={292}
        src={imageUrls.CopyApplicationIdBotSetup}
        alt="copy_application_id_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={5} items={data.getBotSetupStep()} />
      <Image
        className={styles.documentimg}
        width={614}
        height={194}
        src={imageUrls.BotBotSetup}
        alt="bot_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={6} items={data.getBotConfirmationStep()} />
      <Image
        className={styles.documentimg}
        width={474}
        height={227}
        src={imageUrls.YesCreateBotBotSetup}
        alt="yes_create_bot_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={7} items={data.getTokenResetStep()} />
      <Image
        className={styles.documentimg}
        width={827}
        height={187}
        src={imageUrls.ResetTokenBotSetup}
        alt="reset_token_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={8} items={data.getTokenSetupStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={imageUrls.BotTokenBotSetup}
        alt="bot_token_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={9} items={data.getGatewayIntentSetupStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={imageUrls.PrivilegedGatewayIntentsBotSetup}
        alt="privileged_gateway_intents_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={10} items={data.getOAuth2SetupStep()} />
      <Image
        className={styles.documentimg}
        width={323}
        height={265}
        src={imageUrls.Oauth2BotSetup}
        alt="oauth2_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={11} items={data.getScopeSelectionStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={239}
        src={imageUrls.ScopesBotSetup}
        alt="scopes_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={12} items={data.getBotPermissionsStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={424}
        src={imageUrls.BotPermissionsBotSetup}
        alt="bot_permissions_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={13} items={data.getGeneratedUrlStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={93}
        src={imageUrls.GeneratedUrlBotSetup}
        alt="generated_url_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={14} items={data.getBotAdditionStep()} />
      <Image
        className={styles.documentimg}
        width={414}
        height={646}
        src={imageUrls.AddBotToServerBotSetup}
        alt="add_bot_to_server_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={15} items={data.getAuthorizationStep()} />
      <Image
        className={styles.documentimg}
        width={421}
        height={677}
        src={imageUrls.AuthoriseBotSetup}
        alt="authorise_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={16} items={data.getBotVisibilityStep()} />
      <Image
        className={styles.documentimg}
        width={294}
        height={139}
        src={imageUrls.BotInServerBotSetup}
        alt="bot_in_server_bot_setup"
        placeholder="blur"
      />
      <OrderedList start={17} items={data.getBotStartStep()} />
      <Paragraph>
        You have now successfully added a Discord Bot with the desired permissions to your Discord Server. You have also
        added the Application/Client ID and Bot Token to the configuration file as well as started the bot for the first
        time.
      </Paragraph>
    </section>
  );
};

export default DiscordBotSetupSection;