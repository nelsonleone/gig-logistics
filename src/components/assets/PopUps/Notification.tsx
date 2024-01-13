import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

export default function CustomNotification(){
    return(
        <MantineProvider>
            <Notifications />
        </MantineProvider>
    )
}