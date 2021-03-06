# Generated by Django 3.1.4 on 2021-04-06 03:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0043_auto_20210405_2047'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entity',
            old_name='phase5',
            new_name='phase61',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='phase51',
            new_name='phase62',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='phase52',
            new_name='phase63',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='phase53',
            new_name='phase64',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase54',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase6',
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumberfifthlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumberfourthlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumberlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumbersecondlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumbersixthlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='accessionnumberthirdlastyear',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='entity',
            name='phase8',
            field=models.IntegerField(default=0),
        ),
    ]
