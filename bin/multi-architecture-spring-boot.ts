#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MultiArchitectureSpringBootStack } from '../lib/multi-architecture-spring-boot-stack';

const app = new cdk.App();
new MultiArchitectureSpringBootStack(app, 'MultiArchitectureSpringBootStack');
