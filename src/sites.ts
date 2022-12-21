function getSiteIcon(name: string): string {
  return require(`@/assets/site_icons/${name}.png`);
}

export interface SiteInfo {
  name: string;
  icon: string;
}

export function getSiteInfo(url: string): SiteInfo{
  url = url.toLowerCase();
  let siteInfo = {} as SiteInfo;
  if (url.includes("m-team"))
  {
    siteInfo =
    {
      name: 'M-Team',
      icon: getSiteIcon('m-team'),
    };
  } else if (url.includes("keepfrds"))
  {
    siteInfo =
    {
      name: 'FRDS',
      icon: getSiteIcon('keepfrds'),
    };
  } else if (url.includes("springsunday"))
  {
    siteInfo =
    {
      name: 'SSD',
      icon: getSiteIcon('springsunday'),
    };
  } else if (url.includes("hdchina"))
  {
    siteInfo =
    {
      name: 'HDChina',
      icon: getSiteIcon('hdchina'),
    };
  } else if (url.includes("chdbits"))
  {
    siteInfo =
    {
      name: 'CHDBits',
      icon: getSiteIcon('chdbits'),
    };
  } else if (url.includes("hdhome"))
  {
    siteInfo =
    {
      name: 'HDHome',
      icon: getSiteIcon('hdhome'),
    };
  } else if (url.includes("dmhy"))
  {
    siteInfo =
    {
      name: 'U2',
      icon: getSiteIcon('u2'),
    };
  } else if (url.includes("leaguehd"))
  {
    siteInfo =
    {
      name: 'LemonHD',
      icon: getSiteIcon('lemonhd'),
    };
  } else if (url.includes("totheglory"))
  {
    siteInfo =
    {
      name: 'TTG',
      icon: getSiteIcon('totheglory'),
    };
  } else if (url.includes("pterclub"))
  {
    siteInfo =
    {
      name: 'PTer',
      icon: getSiteIcon('pterclub'),
    };
  } else if (url.includes("hdsky"))
  {
    siteInfo =
    {
      name: 'HDSky',
      icon: getSiteIcon('hdsky'),
    };
  } else if (url.includes("greatposterwall"))
  {
    siteInfo =
    {
      name: 'GPW',
      icon: getSiteIcon('greatposterwall'),
    };
  } else if (url.includes("audiences"))
  {
    siteInfo =
    {
      name: 'Audiences',
      icon: getSiteIcon('audiences'),
    };
  } else if (url.includes("jptv.club"))
  {
    siteInfo =
    {
      name: 'JPTV',
      icon: getSiteIcon('jptv'),
    };
  } else if (url.includes("jptv.club"))
  {
    siteInfo =
    {
      name: 'JPTV',
      icon: getSiteIcon('jptv'),
    };
  } else if (url.includes("monikadesign"))
  {
    siteInfo =
    {
      name: 'MDU',
      icon: getSiteIcon('monikadesign'),
    };
  } else if (url.includes("blutopia"))
  {
    siteInfo =
    {
      name: 'BLU',
      icon: getSiteIcon('blutopia'),
    };
  } else if (url.includes("hawke.uno"))
  {
    siteInfo =
    {
      name: 'HUNO',
      icon: getSiteIcon('huno'),
    };
  } else if (url.includes("asiancinema"))
  {
    siteInfo =
    {
      name: 'ACM',
      icon: getSiteIcon('asiancinema'),
    };
  } else if (url.includes("beitai"))
  {
    siteInfo =
    {
      name: '备胎',
      icon: getSiteIcon('beitai'),
    };
  } else if (url.includes("animebytes"))
  {
    siteInfo =
    {
      name: 'AB',
      icon: getSiteIcon('animebytes'),
    };
  } else if (url.includes("torrentleech"))
  {
    siteInfo =
    {
      name: 'TL',
      icon: getSiteIcon('torrentleech'),
    };
  }

  return siteInfo;
}
