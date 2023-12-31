import React from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import { shades } from '../../theme'

const Footer = () => {
    const {palette: { neutral }} = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box 
                width="80%" 
                margin="auto" 
                display="flex" 
                justifyContent="space-between" 
                flexWrap="wrap" 
                rowGap="30px" 
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography 
                        variant='h4' 
                        fontWeight="bold" 
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio fuga non similique aperiam ducimus veritatis hic facere natus reprehenderit totam voluptate pariatur, dignissimos cum et laborum, expedita mollitia veniam. Laborum.
                    </div>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stories</Typography>
                    <Typography mb="30px">Terms and Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate and Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns and Refunds</Typography>
                </Box>
                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">12345 Ventura Blvd. Los Angeles, CA 91604</Typography>
                    <Typography mb="30px">Email: example@gmail.com</Typography>
                    <Typography mb="30px">Phone: (818) 888-8888</Typography>
                </Box>


            </Box>
        </Box>
    )
}

export default Footer;