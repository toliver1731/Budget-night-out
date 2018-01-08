import React, { Component } from 'react';
import './Venues.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Venue = ({ name }) => <li>{name}</li>;
