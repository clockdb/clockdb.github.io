# Generated by Django 3.1.4 on 2021-05-12 21:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0125_capitalization_industry_intrinsicvalue_phase_region'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='industry',
            name='IndustryCode',
        ),
        migrations.RemoveField(
            model_name='region',
            name='RegionCode',
        ),
    ]
