import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    CardMedia,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';

import { useSelector } from "react-redux";
import StarRatings from 'react-star-ratings';


export default function StudentProfile(props) {

    const student = useSelector((state) => state.student);

    const [viewOne, setViewOne] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (student.viewOneStudent === undefined) {

        } else {
            setViewOne(student.viewOneStudent);
            setLoading(false);
        }
    }, [student.viewOneStudent])

    const Profiles = () => {
        return (
            <Box sx={{ flexGrow: 1 }} style={{
                backgroundColor: '#1E1F20', height: 300,
                border: '1px solid #303336', borderRadius: 10
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} >
                        <Box style={{
                            display: 'flex', width: '100%',
                            flexDirection: 'column',
                            height: 300, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <CardMedia
                                style={{
                                    height: 100, width: 100, objectFit: 'cover',
                                    marginBottom: 20, border: '2px solid #fff', borderRadius: 10
                                }}
                                component="img"
                                image={viewOne.profile_photo}
                                alt=""
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                <StarRatings
                                    rating={viewOne.c_rating}
                                    starRatedColor="#26CE8D"
                                    numberOfStars={5}
                                    starDimension="25px"
                                    starSpacing="0px"
                                    isSelectable="false"
                                    starHoverColor="#26CE8D"
                                    starEmptyColor="#696969"
                                />

                            </Box>
                            <Typography style={{ color: '#D1D4C9', fontSize: 12 }} component="div">
                                <span style={{ fontSize: 18 }}>{viewOne.c_rating}</span> Overall Rating
                                <span style={{ fontSize: 18, marginLeft: 10 }}>{viewOne.c_reviews}</span> Reviews
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={7}>
                        <Box style={{
                            display: 'flex', width: '100%',
                            flexDirection: 'column',
                            height: 300, paddingTop: 10
                        }}>
                            <Typography style={{ color: '#D1D4C9', fontSize: 12, paddingLeft: 16 }} component="div">
                                <span style={{ fontSize: 30, marginRight: 20, color: 'white' }}>{viewOne.name}</span> {viewOne.section}
                            </Typography>

                            <TableContainer>
                                <Table sx={{ minWidth: '100%' }} size="small" aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Gender:
                                            </TableCell>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.gender}</TableCell>
                                            <TableCell style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Teamwork:</TableCell>
                                            <TableCell style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: viewOne.c_teamwork <= 2 ? '#ff3333' : '#2df763', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    {viewOne.c_teamwork}
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Birthday:
                                            </TableCell>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.birthday}</TableCell>
                                            <TableCell style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Creativity:</TableCell>
                                            <TableCell style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: viewOne.c_creativity <= 2 ? '#ff3333' : '#2df763', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    {viewOne.c_creativity}
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Address:
                                            </TableCell>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.address}</TableCell>
                                            <TableCell style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Adaptability:</TableCell>
                                            <TableCell style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: viewOne.c_adaptability <= 2 ? '#ff3333' : '#2df763', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    {viewOne.c_adaptability}
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Nickname:
                                            </TableCell>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.nickname}</TableCell>
                                            <TableCell style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Leadership:</TableCell>
                                            <TableCell style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: viewOne.c_leadership <= 2 ? '#ff3333' : '#2df763', padding: 5,
                                                    borderRadius: 8, color: '#fff'
                                                }}>
                                                    {viewOne.c_leadership}
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', fontWeight: 600, border: 'none' }} component="th" scope="row">
                                                Skills / Languages:
                                            </TableCell>
                                            <TableCell style={{ width: '40%', color: '#B0B1AE', border: 'none' }}>{viewOne.skills}</TableCell>
                                            <TableCell style={{ width: '10%', color: '#B0B1AE', fontWeight: 600, border: 'none' }}>Persuasion:</TableCell>
                                            <TableCell style={{ width: '10%', border: 'none' }}>
                                                <Box style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: viewOne.c_persuasion <= 2 ? '#ff3333' : '#2df763', padding: 5,
                                                    borderRadius: 8, color: '#fff', paddingLeft: 12, paddingRight: 12
                                                }}>
                                                    {viewOne.c_persuasion}
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Box sx={{
                                display: 'grid',
                                gap: 1.3,
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                marginLeft: 2,
                                marginTop: 1,
                                width: '65%'
                            }}>

                                {viewOne.social_github === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Github
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_github} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Github</a>
                                    </Typography>
                                )}

                                {viewOne.social_facebook === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Facebook
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_facebook} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Facebook</a>
                                    </Typography>
                                )}

                                {viewOne.social_linkedIn === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        LinkedIn
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_linkedIn} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >LinkedIn</a>
                                    </Typography>
                                )}

                                {viewOne.social_twitter === "" ? (
                                    <Typography style={{ fontSize: 14, color: '#62666D' }}>
                                        Twitter
                                    </Typography>
                                ) : (
                                    <Typography style={{ fontSize: 14 }}>
                                        <a target="_blank" rel="noreferrer" href={viewOne.social_twitter} style={{ color: '#26CE8D', textDecoration: 'none' }}
                                        >Twitter</a>
                                    </Typography>
                                )}

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        )
    }

    return (
        <>
            {loading ? (<div></div>) : <Profiles />}
        </>
    );
}
